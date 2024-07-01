// import React from 'react';
// import PropTypes from 'prop-types';
// import { NavLink } from 'react-router-dom';
// import './Home.css';

// const Home = () => {
//   return (
//     <div className="HomeMainPage">
//       <NavLink to='/movies' className="NavLink">
//         <div className="HomeSection">
//           <img src="https://townsquare.media/site/442/files/2019/08/best-posters-of-the-decade.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89" alt="Movies" />
//           <div className="overlay">
//             <h2>Movies</h2>
//           </div>
//         </div>
//       </NavLink>
//       <NavLink to='/anime' className="NavLink">
//         <div className="HomeSection">
//           <img src="https://wallpaperaccess.com/full/9223943.jpg" alt="Anime" />
//           <div className="overlay">
//             <h2>Anime</h2>
//           </div>
//         </div>
//       </NavLink>
//     </div>
//   );
// };

// Home.propTypes = {
//   // Add PropTypes here if needed
// };

// export default Home;




// import React from 'react';

// const Home = () => {
//   return (
//     <div className="min-h-screen flex flex-col bg-black text-white">
//       {/* <header className="bg-gray-900 text-white w-full py-6 shadow-lg">
//         <h1 className="text-3xl md:text-5xl text-center font-bold">Welcome to Movie Community</h1>
//       </header> */}
//       <main className="flex-grow container mx-auto px-4 py-12">
//         <section className="text-center mb-12">
//           <h2 className="text-2xl md:text-3xl font-semibold mb-6">Discover, Interact, and Enjoy</h2>
//           <p className="text-gray-400 text-lg md:text-xl">Join our community to explore the world of movies, interact with fellow movie enthusiasts, and share your thoughts.</p>
//         </section>
//         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//           <div className="bg-gray-900 p-6 md:p-8 rounded-lg shadow-lg hover:shadow-md hover:shadow-white transition-shadow duration-300">
//             <h3 className="text-xl md:text-2xl font-bold mb-4">Create a Profile</h3>
//             <p className="text-gray-400 text-base">Set up your profile and personalize your movie experience.</p>
//           </div>
//           <div className="bg-gray-900 p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//             <h3 className="text-xl md:text-2xl font-bold mb-4">Join Community</h3>
//             <p className="text-gray-400 text-base">Participate in discussions about your favorite movies and genres.</p>
//           </div>
//           <div className="bg-gray-900 p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//             <h3 className="text-xl md:text-2xl font-bold mb-4">Share Reviews</h3>
//             <p className="text-gray-400 text-base">Write and share reviews of movies you've watched.</p>
//           </div>
//         </section>
//         <section className="text-center">
//           <h3 className="text-2xl md:text-2xl font-semibold mb-6">Get Started Today!</h3>
//           <button className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-500 transition-colors duration-300">Join Now</button>
//         </section>
//       </main>
//       <footer className="bg-gray-900 text-white w-full py-4 text-center mt-auto">
//         <p>&copy; 2024 Movie Community. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default Home;

import React from 'react';
import './Home.css'; // Import the CSS file
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="containerHomeMain">
      {/* <header className="header">
        <h1>Welcome to Movie Community</h1>
      </header> */}
      <main className="main">
        <section className="intro">
          <h2>Discover, Interact, and Enjoy</h2>
          <p>Join our community to explore the world of movies, interact with fellow movie enthusiasts, and share your thoughts.</p>
        </section>



        
        <section className="features">
          {/* <div className="feature-card">
            </div> */}

          <button class="button feature-card type1">
            <h3>Create a Profile</h3>
             <p>Set up your profile and personalize your movie experience.</p>
  
           </button>

          



          {/* <div className="feature-card">
            </div> */}


          <button className="button feature-card type1">
            <h3>Join Discussions</h3>
            
             
            <p>Participate in discussions about your favorite movies and genres.</p>
  
           </button>

          {/* <div className="feature-card">
          </div> */}


          <button class="button feature-card type1">
            <h3>Share Reviews</h3>
            <p>Write and share reviews of movies you've watched.</p>
            
           </button>


        </section>
        <section className="cta">
          <h3>Get Started Today!</h3>
          {/* <button className="join-button">Join Now</button> */}

          <NavLink to={`/Movies`} className="cssbuttons-io-button">
      Join Now
      <div className="icon">
        <svg
          height="24"
          width="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </NavLink>



        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Movie Community. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
