// MovieListPage.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Axios for making HTTP requests

const profile = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Function to fetch data from backend
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/add-to-watchlist'); // Assuming your backend endpoint for fetching movies

        if (response.data && response.data.movies) {
          setMovies(response.data.movies); // Update state with fetched movies array
        }
      } catch (error) {
        console.error('Error My fetching movies:', error);
      }
    };

    fetchMovies(); // Call fetchMovies function when component mounts
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div className="min-h-screen w-[85vw] bg-gray-900 text-white">
      <div className="w-[85] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Movie List d</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {movies.map((movie) => (
            <div key={movie._id} className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
                <p className="text-sm text-gray-400 mb-2">Rating: {movie.vote_average}</p>
                <p className="text-sm text-gray-400 mb-2">Language: {movie.original_language}</p>
                <p className="text-sm text-gray-400">Release Date: {new Date(movie.release_date).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default profile;



