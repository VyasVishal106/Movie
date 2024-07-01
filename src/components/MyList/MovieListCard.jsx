// import React, { useState, useEffect } from 'react';

// const MovieCard = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     fetchMovies();
//   }, []);

//   const fetchMovies = async () => {
//     try {
//       const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY');
//       const data = await response.json();
//       setMovies(data.results);
//     } catch (error) {
//       console.error('Error fetching movies:', error);
//     }
//   };

  

//   const watchNow = (movie) => {
//     // Add logic to watch movie now
//   };

//   const removeFromWatchlist = (movie) => {
//     // Add logic to remove movie from watchlist
//   };

//   return (
//     <div className="movie-container">
//       {movies.map(movie => (
//         <div key={movie.id} className="movie-card">
//           <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
//           <h3>{movie.title}</h3>
//           <p>{movie.release_date}</p>
//           <p>{movie.overview}</p>
//           {/* <button onClick={handleAddToWatchlist}>Add to Watchlist</button> */}
//           <button onClick={() => watchNow(movie)}>Watch Now</button>
//           <button onClick={() => removeFromWatchlist(movie)}>Remove from Watchlist</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MovieCard;
