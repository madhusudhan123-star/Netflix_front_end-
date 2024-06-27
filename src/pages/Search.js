import React, { useState,useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';
import Cards from '../components/Cards';
import { Link } from 'react-router-dom'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      
      const response = await axios.post(`https://netflix-backend-code.onrender.com/api/search?query=${searchTerm}`, config);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching:', error);
      setError('An error occurred while searching. Please try again after login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Search</h1>
        <form onSubmit={handleSearch} className="flex items-center mb-8">
          <input
            type="text"
            placeholder="Search for a movie or TV show..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-gray-700 py-2 px-4 rounded-l-md text-white focus:outline-none flex-1"
          />
          <button
            type="submit"
            className="bg-red-600 py-2 px-4 rounded-r-md flex items-center"
            disabled={isLoading}
          > 
            <FaSearch className="mr-2" />
            {isLoading ? 'Searching...' : 'Search'}
          </button>
        </form>
        {error && <p className="text-red-500 mb-4">{error} <Link to='/login'> <button className='text-white'>Login</button></Link> </p>}
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {searchResults.map((result) => (
              <Cards 
                key={result.id} 
                data={result} 
                type={result.media_type} 
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-400">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
