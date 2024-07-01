import React from 'react';
import './MainPage.css';
import VHeader from './VHeader';
import { Outlet } from 'react-router-dom';
import MovieContextProvider from '../../Movies/M_Context';

const MainPage = () => {
  const links = [
    { text: 'Home', url: '' },
    { text: 'Movies', url: 'movies' },
    { text: 'Shows', url: 'tv-shows' },
    // { text: 'Latest', url: 'latest' },
    { text: 'My List', url: 'my-list' },
  ];

  
  return (

    <MovieContextProvider>
        
    <div className="MainPage">
      <VHeader links={links} />
      {/* <AllPageHome /> */}
      <Outlet />
       </div>
      </MovieContextProvider>
  );
}

export default MainPage;
