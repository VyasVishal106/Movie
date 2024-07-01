// // MovieList.js
// import React from 'react';
// import MovieCard from './MovieCard';

// const MovieList = ({ movies, sectionTitle }) => {
//   return (
//     <div className="movie-section">
//       <h2>{sectionTitle}</h2>
//       <div className="movie-list">
//         {movies && movies.length > 0 ? (
//           movies.map(movie => (
//             <MovieCard key={movie.id} movie={movie} />
//           ))
//         ) : (
//           <p>No movies found for {sectionTitle.toLowerCase()}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MovieList;


import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, sectionTitle }) => {
  return (
    <div className="py-8 px-4  w-[85vw] sm:px-6 lg:px-8 bg-black ">
      <h2 className="text-3xl font-bold text-white mb-6">{sectionTitle}</h2>
      {movies && movies.length > 0 ? (
        <div className="movie-list">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="text-gray-400 text-lg">
          No movies found for {sectionTitle.toLowerCase()}
        </p>
      )}
    </div>
  );
};

export default MovieList;