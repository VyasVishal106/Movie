import React, { createContext, useState, useEffect } from 'react';

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = 'c2847bfd8ccc5f4e2fe229a5c1f786c8';
  const specificMovieId = 157336; // Example movie ID

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const [popularResponse, upcomingResponse, latestResponse, topRatedResponse, movieResponse] = await Promise.all([
          fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`),
          fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`),
          fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`),
          fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`),
          fetch(`https://api.themoviedb.org/3/movie/${specificMovieId}?api_key=${apiKey}`)
        ]);

        if (!popularResponse.ok || !upcomingResponse.ok || !latestResponse.ok || !topRatedResponse.ok || !movieResponse.ok) {
          throw new Error('Failed to fetch movies');
        }

        const popularData = await popularResponse.json();
        const upcomingData = await upcomingResponse.json();
        const latestData = await latestResponse.json();
        const topRatedData = await topRatedResponse.json();
        const movieData = await movieResponse.json();

        setPopularMovies(popularData.results);
        setUpcomingMovies(upcomingData.results);
        setLatestMovies(latestData.results);
        setTopRatedMovies(topRatedData.results);
        setMovie(movieData);

        const videoResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieData.id}/videos?api_key=${apiKey}`
        );

        if (!videoResponse.ok) {
          throw new Error('Failed to fetch videos');
        }

        const videoData = await videoResponse.json();
        setVideos(videoData.results);

        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <MovieContext.Provider value={{ 
      popularMovies, 
      upcomingMovies, 
      latestMovies, 
      topRatedMovies, 
      movie, 
      videos, 
      loading 
    }}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
