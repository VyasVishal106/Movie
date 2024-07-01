import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Error.css';

const ErrorPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-gray-900 to-black">
      <div className="text-center p-8 max-w-lg mx-auto shadow-lg rounded-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-700 animate-fade-in-up">
        <h1 className="text-8xl font-extrabold text-white mb-4 glitch" data-text="404">404</h1>
        <p className="text-3xl text-gray-300 mb-6">Oops! The page you're looking for doesn't exist.</p>
        <p className="text-lg text-gray-400 mb-8">
          It looks like the page you're trying to visit doesn't exist. Please check the URL and try again.
        </p>
        <button
          className='GLITCH text-white bg-red-600 hover:bg-red-700 text-xl py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-md'
          onClick={goHome}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
