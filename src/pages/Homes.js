import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { FaCirclePlay } from 'react-icons/fa6';
import YouTube from 'react-youtube';
import List_cards from '../components/List_cards';
import axios from 'axios';

const Homes = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
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
        

        // Fetch popular and top rated movies/TV shows
        const [
          popularMoviesRes,
          topMoviesRes,
          popularTVShowsRes,
          topTVShowsRes
        ] = await Promise.all([
          axios.get('https://netflix-backend-code.onrender.com/api/movies/popular', config),
          axios.get('https://netflix-backend-code.onrender.com/api/movies/top', config),
          axios.get('https://netflix-backend-code.onrender.com/api/tvshow/popular', config),
          axios.get('https://netflix-backend-code.onrender.com/api/tvshow/top', config)
        ]);

        setPopularMovies(popularMoviesRes.data);
        setTopMovies(topMoviesRes.data);
        setPopularTVShows(popularTVShowsRes.data);
        setTopTVShows(topTVShowsRes.data);

        // Fetch movies for each genre
        const genrePromises = Object.keys(genreMap).map(genre => 
          axios.get(`https://netflix-backend-code.onrender.com/api/movies/${genre}`, config)
        );

        const genreResponses = await Promise.all(genrePromises);
        const genreMoviesData = {};
        Object.keys(genreMap).forEach((genre, index) => {
          genreMoviesData[genre] = genreResponses[index].data;
        });

        setGenreMovies(genreMoviesData);

      } catch (error) {
        console.error('Error fetching data:', error);
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
            videoId="Jokpt_LJpbw" // Replace with your YouTube video ID
            opts={videoOptions}
            className="w-full h-full object-cover"
          />
        </div>
        <div style={{"background-color": "#04040475"}} className="text-white relative z-10 h-screen flex items-center justify-center">
          <div className="mx-10">
            <h1 className="text-5xl font-bold mb-4">ATLAS</h1>
            <p className="text-xl w-3/5 mb-8">
            Atlas Shepherd (Jennifer Lopez), a brilliant but misanthropic data analyst with a deep distrust of artificial intelligence, joins a mission to capture a renegade robot with whom she shares a mysterious past. But when plans go awry, her only hope of saving the future of humanity from AI is to trust it. Atlas is only on Netflix, May 24.
            </p>
          </div>
        </div>
      </div>
      <List_cards title="Popular Movies" data={popularMovies} />
      <List_cards title="Top Rated Movies" data={topMovies} />
      <List_cards title="Popular TV Shows" data={popularTVShows} />
      <List_cards title="Top Rated TV Shows" data={topTVShows} />
      {Object.entries(genreMovies).map(([genre, movies]) => (
        <List_cards key={genre} title={`${genre.charAt(0).toUpperCase() + genre.slice(1)} Movies`} data={movies} />
      ))}
      {Object.entries(genreMovies).map(([genre, movies]) => (
        <List_cards key={genre} title={`${genre.charAt(0).toUpperCase() + genre.slice(1)} tvshow`} data={movies} />
      ))}
      <Footer />
    </div>
  );
};

export default Homes;