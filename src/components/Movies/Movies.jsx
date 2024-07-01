// MoviePage.js
import React, { useContext } from 'react';
import { MovieContext } from './M_Context';
import MovieList from './MovieList';
import './Movies.css';

const Movie = () => {
  const { popularMovies, upcomingMovies, latestMovies, topRatedMovies, loading } = useContext(MovieContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-page">
      <MovieList movies={popularMovies} sectionTitle="Popular Movies" />
      <MovieList movies={upcomingMovies} sectionTitle="Upcoming Movies" />
      <MovieList movies={latestMovies} sectionTitle="Latest Movies" />
      <MovieList movies={topRatedMovies} sectionTitle="Top Rated Movies" />
    </div>
  );
};

export default Movie;
