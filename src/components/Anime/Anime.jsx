import React from 'react'
import VHeader from '../Home/Parts/VHeader'
import './Anime.css'
import { Outlet } from 'react-router-dom'

const Anime = () => {

  const links = [
    { text: 'Home', url: '' },
    { text: 'Big 3', url: 'Big3' },
    { text: 'Up comig', url: 'Animelatest' },
    { text: 'Anime', url: 'AnimeList' },
    { text: 'Ch', url: 'Char' },
    { text: 'My List', url: 'myAnimelist' },

  ];

  return (
    <div className='AnimeHomePage'>
      <VHeader links={links} />
      {/* <VHeader_Anime /> */}
      <Outlet />
    </div>
  )
}

export default Anime
