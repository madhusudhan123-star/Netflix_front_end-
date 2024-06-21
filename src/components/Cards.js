import React, { useState, useEffect } from 'react';
import { FaPlay, FaPlus, FaThumbsUp,FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cards = ({ data, type }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  if (!data) {
    return null;
  }

  const title = type === 'movie' ? data.title : data.name;
  const releaseDate = type === 'movie' ? data.release_date : data.first_air_date;
  const year = releaseDate ? new Date(releaseDate).getFullYear() : 'N/A';
  

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div 
      className="relative w-64 h-[15rem] rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {data.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt={title}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <span className="text-gray-500">No Image Available</span>
        </div>
      )}
      
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-between p-4">
          <div>
            <h3 className="text-white text-xl font-bold mb-2">{data.title}</h3>
            <p className="text-gray-300 text-sm mb-4">
              {data.overview ? `${data.overview.slice(0, 100)}...` : 'No overview available'}
            </p>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-2">
                <button className="bg-white text-black p-2 rounded-full hover:bg-opacity-80">
                <Link 
                  to="/Play" 
                  state={{ movieData: data }}
                  className="flex items-center justify-center w-full h-full"
                >
                  <FaPlay />
                </Link>
                </button>
                <button 
                  className={`border border-gray-300 p-2 rounded-full transition-colors duration-300 ${
                    isLiked 
                      ? 'bg-red-600 text-white' 
                      : 'text-white hover:bg-white hover:text-black'
                  }`}
                  onClick={handleLikeClick}
                >
                  <FaHeart className={`transform transition-transform duration-300 ${isLiked ? 'scale-110' : 'scale-100'}`} />
                </button>
              </div>
              <span className="text-green-500 font-bold">
                {data.vote_average ? data.vote_average.toFixed(1) : 'N/A'}
              </span>
            </div>
            
            <div className="text-white text-sm">
              <span className="mr-2">{year}</span>
              <span className="border border-white px-1">{data.adult ? '18+' : 'PG'}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;