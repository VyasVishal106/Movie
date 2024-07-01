// import React from 'react';

// const MovieCard = ({ movie, addToWatchlist, watchNow }) => {
//   const handleAddToWatchlist = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/add-to-watchlist', {
//         method: 'POST',
        
        
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(movie),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to add movie to watchlist');
//       }

//       // Optionally, you can handle success here, e.g., show a message to the user
//       console.log('Movie added to watchlist successfully');
//     } catch (error) {
//       console.error(error);
//       // Optionally, you can handle errors here, e.g., show an error message to the user
//     }
//   };

//   return (
//     <div className="movie-card">
//       <div className="MCIMgDiv">

//       <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}  className='MCImg'/>
//       </div>
//       <div className="MCDabout">

//       <p>Rating: {movie.vote_average}</p>
//       <p>Lag: {movie.original_language}</p>
//       </div>

  


      

//       <h3>{movie.title}</h3>
//       {/* <p>{movie.release_date}</p> */}
//       {/* <p>{movie.overview}</p> */}
//       <a href={movie.trailer_link} target="_blank" rel="noopener noreferrer">Watch Trailer</a> {/* Added trailer link */}
//       <button onClick={handleAddToWatchlist}>Add to Watchlist</button>
//       <button onClick={() => watchNow(movie)}>Watch Now</button>
//     </div>
//   );
// };

// export default MovieCard;


import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MovieCard = ({ movie, addToWatchlist, watchNow }) => {
  const handleAddToWatchlist = async () => {
    try {
      const response = await fetch('http://localhost:5000/add-to-watchlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          poster_path: movie.poster_path,
          title: movie.title,
          vote_average: movie.vote_average,
          original_language: movie.original_language,
          release_date: movie.release_date,
          // Add other necessary fields as needed
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add movie to watchlist');
      }

      console.log('Movie added to watchlist successfully');
      toast.success('Movie added to watchlist successfully'); // Show toast notification
    } catch (error) {
      console.error(error);
      toast.error('Failed to add movie to watchlist'); // Show toast notification for error
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col min-w-[80vw] sm:min-w-[40vw] md:min-w-[30vw] lg:min-w-[20vw]">
      <ToastContainer /> {/* ToastContainer component */}
      <div className="relative">
        <img 
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} 
          alt={movie.title}
          className="w-full h-auto object-cover"
        />
        <div className="absolute top-2 right-2 bg-yellow-400 text-black font-bold px-2 py-1 rounded">
          ⭐ {movie.vote_average.toFixed(1)}
        </div>
      </div>
      
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">{movie.title}</h3>
          <p className="text-sm text-gray-400 mb-2">{movie.release_date}</p>
          <p className="text-sm text-gray-500 mb-4">{movie.original_language.toUpperCase()}</p>
        </div>
        
        <div className="flex flex-col space-y-2">
          <a 
            href={movie.trailer_link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 text-sm font-medium"
          >
            Watch Trailer
          </a>
          <button 
            onClick={handleAddToWatchlist}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors duration-300"
          >
            + Add to Watchlist
          </button>
          <button 
            onClick={() => watchNow(movie)}
            className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition-colors duration-300"
          >
            ▶ Watch Now
          </button> 
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
