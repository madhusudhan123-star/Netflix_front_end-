import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
// import { FaCirclePlay } from 'react-icons/fa6';
import YouTube from 'react-youtube';
import List_cards from '../components/List_cards';
import axios from 'axios';

const Homes = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [popularTVShows, setPopularTVShows] = useState([]);
  const [topTVShows, setTopTVShows] = useState([]);
  const [genreMovies, setGenreMovies] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

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
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      const hasSeenIntro = localStorage.getItem('hasSeenIntro');
      if (!hasSeenIntro) {
        setShowIntro(true);
        localStorage.setItem('hasSeenIntro', 'true');
      } 
    }

    const fetchData = async () => {
      try {
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
          axios.get('http://localhost:8000/api/movies/popular', config),
          axios.get('http://localhost:8000/api/movies/top', config),
          axios.get('http://localhost:8000/api/tvshow/popular', config),
          axios.get('http://localhost:8000/api/tvshow/top', config)
        ]);

        setPopularMovies(popularMoviesRes.data);
        setTopMovies(topMoviesRes.data);
        setPopularTVShows(popularTVShowsRes.data);
        setTopTVShows(topTVShowsRes.data);

        // Fetch movies for each genre
        const genrePromises = Object.keys(genreMap).map(genre => 
          axios.get(`http://localhost:8000/api/movies/${genre}`, config)
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
  }, [genreMap]);

  const videoOptions = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      fs: 0,
      iv_load_policy: 3,
      loop: 0,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      mute: 1,
    },
  };
  const video_trailer = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      fs: 0,
      iv_load_policy: 3,
      loop: 0,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      mute: 1,
      loop: 1,
    },
  };


  useEffect(() => {
    const introTimer = setTimeout(() => {
      setShowIntro(false);
    }, 6000); // Adjust this time to match your intro video duration

    return () => clearTimeout(introTimer);
  }, []);

  const handleIntroEnd = () => {
    setShowIntro(false);
  };

  if (showIntro) {
    return (
      <div className="w-full h-screen bg-black">
        <YouTube
          videoId="GV3HUDMQ-F8" // Replace with your intro video ID
          opts={videoOptions}
          onEnd={handleIntroEnd}
          className="w-full h-full object-cover"
        />  
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="w-full h-screen bg-black flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Atlas</h1>
          <p className="text-xl mb-8">Please login to access the content.</p>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md text-xl">
            <a href="/login">Login</a>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-black'>
      <NavBar />
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <YouTube
            videoId="Jokpt_LJpbw" // Replace with your YouTube video ID
            opts={video_trailer}
            className="w-full h-full object-cover"
          />
        </div>
        <div style={{ backgroundColor: "#04040475" }} className="text-white relative z-10 h-screen flex items-center justify-center">
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
        <List_cards key={genre} title={`${genre.charAt(0).toUpperCase() + genre.slice(1)} TV Shows`} data={movies} />
      ))}
      <Footer />
    </div>
  );
};

export default Homes;
