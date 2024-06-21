import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { FaCirclePlay } from 'react-icons/fa6';
import YouTube from 'react-youtube';
import List_cards from '../components/List_cards';
import axios from 'axios';

const Homes = () => {
  const [popularTVShows, setPopularTVShows] = useState([]);
  const [topTVShows, setTopTVShows] = useState([]);
  const [genreMovies, setGenreMovies] = useState({});

  const genreMap = {
    action: 28,
    animation: 16,
    comedy: 35,
    crime: 80,
    drama: 18,
    fantasy: 14,
    historical: 36,
    horror: 27,
    romance: 10749,
    thriller: 53,
    western: 37,
    war: 10752
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
    
        // Fetch popular and top rated TV shows
        const [popularTVShowsRes, topTVShowsRes] = await Promise.all([
          axios.get('https://netflix-backend-code.onrender.com/api/tvshow/popular', config),
          axios.get('https://netflix-backend-code.onrender.com/api/tvshow/top', config)
        ]);
        setPopularTVShows(popularTVShowsRes.data);
        setTopTVShows(topTVShowsRes.data);
    
        // Fetch TV shows for each genre
        const genrePromises = Object.keys(genreMap).map(genre => {
          const url = `https://netflix-backend-code.onrender.com/api/tv/${genre}`;
          console.log(`Fetching TV shows for genre ${genre} from: ${url}`);
          return axios.get(url, config);
        });
    
        const genreResponses = await Promise.all(genrePromises);
        const genreMoviesData = {};
        Object.keys(genreMap).forEach((genre, index) => {
          genreMoviesData[genre] = genreResponses[index].data;
          console.log(`Received ${genreResponses[index].data.length} TV shows for genre ${genre}`);
        });
    
        setGenreMovies(genreMoviesData);
    
      } catch (error) {
        console.error('Error fetching data:', error);
        if (error.response) {
          console.error('Error response:', error.response.data);
          console.error('Error status:', error.response.status);
        }
      }
    };
    fetchData();
  }, []);

  const videoOptions = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      loop: 1,
      mute: 1,
    },
  };

  return (
    <div className='bg-black'>
       <NavBar />
       <div className="relative ">
         <div className="absolute inset-0 z-0">
           <YouTube
            videoId="IyZ0xetSb9s" // Replace with your YouTube video ID
            opts={videoOptions}
            className="w-full h-full object-cover"
          />
        </div>
        <div style={{"background-color": "#04040475"}} className="text-white relative z-10 h-screen flex items-center justify-center">
          <div className="mx-10">
            <h1 className="text-5xl font-bold mb-4">Avatar The Last Airbender 15th Anniversary Trailer </h1>
            <p className="text-xl w-3/5 mb-8">
            Avatar: The Last Airbender is one of the greatest shows ever made and I made this trailer for it’s fans. If you haven’t joined Aang, Katara, Sokka and Toph on their adventure yet then I hope this trailer gives you a gentle nudge toward doing so. 
            </p>
          </div>
        </div>
      </div>
      <List_cards title="Popular TV Shows" data={popularTVShows} />
      <List_cards title="Top Rated TV Shows" data={topTVShows} />
      <Footer />
    </div>
  );
};

export default Homes;

