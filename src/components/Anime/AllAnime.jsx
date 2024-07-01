import React from 'react';
import { NavLink } from 'react-router-dom';

const data = {
  topAiring: [
    { title: 'One Piece', episodes: 1106, comments: 1073, imgUrl: 'https://images.justwatch.com/poster/304340004/s592/season-3' },
    { title: 'Tsukimichi -Moonlit Fantasy- Season 2', episodes: 21, comments: 19, imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwln80oQSrsfTPvLStaU7V7d9uKkjILtgxoA&s' },
    { title: 'Wind Breaker', episodes: 9, comments: 7, imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwln80oQSrsfTPvLStaU7V7d9uKkjILtgxoA&s' },
    { title: 'Case Closed', episodes: 1124, comments: 123, imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwln80oQSrsfTPvLStaU7V7d9uKkjILtgxoA&s' },
    { title: 'Kaiju No. 8', episodes: 7, comments: 7, imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwln80oQSrsfTPvLStaU7V7d9uKkjILtgxoA&s' },
  ],
  mostPopular: [
    { title: 'One Piece', episodes: 1106, comments: 1073, imgUrl: 'https://images.justwatch.com/poster/304340004/s592/season-3' },
    { title: 'Naruto: Shippuden', episodes: 500, comments: 500, imgUrl: 'path/to/naruto.jpg' },
    { title: 'Jujutsu Kaisen 2nd Season', episodes: 23, comments: 23, imgUrl: 'path/to/jujutsu.jpg' },
    { title: 'Bleach', episodes: 366, comments: 366, imgUrl: 'path/to/bleach.jpg' },
    { title: 'Black Clover', episodes: 170, comments: 170, imgUrl: 'path/to/blackclover.jpg' },
  ],
  mostFavorite: [
    { title: 'One Piece', episodes: 1106, comments: 1073, imgUrl: 'https://images.justwatch.com/poster/304340004/s592/season-3' },
    { title: 'Chainsaw Man', episodes: 12, comments: 12, imgUrl: 'path/to/chainsawman.jpg' },
    { title: 'Jujutsu Kaisen (TV)', episodes: 24, comments: 24, imgUrl: 'path/to/jujutsu.jpg' },
    { title: 'Demon Slayer: Kimetsu no Yaiba Swordsmith Village Arc', episodes: 11, comments: 11, imgUrl: 'path/to/demonslayer.jpg' },
    { title: 'Attack on Titan', episodes: 25, comments: 25, imgUrl: 'path/to/aot.jpg' },
  ],
  latestCompleted: [
    { title: 'Super Dragon Ball Heroes: Ultra God Mission', episodes: 10, comments: 10, imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwln80oQSrsfTPvLStaU7V7d9uKkjILtgxoA&s' },
    { title: 'Demon Prince Enma', episodes: 4, comments: 4, imgUrl: 'path/to/demonprince.jpg' },
    { title: 'Cardfight!! Vanguard: Divinez', episodes: 6, comments: 6, imgUrl: 'path/to/cardfight.jpg' },
    { title: 'Ragna Crimson', episodes: 24, comments: 20, imgUrl: 'path/to/ragna.jpg' },
    { title: 'Code Geass: Lelouch of the Rebellion', episodes: 25, comments: 25, imgUrl: 'path/to/codegeass.jpg' },
  ],
};

let NewUrl = "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg"

const Section = ({ title, items }) => (
  <div className="mb-8">
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    <div className="grid gap-4">
      {items.map((item, index) => (
      <NavLink to="Anime-Play">
        <div
          key={index}
          className="flex items-center bg-gray-800 p-4 rounded-md hover:bg-gray-700 transition transform hover:scale-105 cursor-pointer"
        >
          <img src={NewUrl} alt={item.title} className="w-18 h-20 object-cover rounded-md mr-4" />
          <div className="flex-1">
            <div className="font-semibold">{item.title}</div>
            <div className="text-gray-400">CC: {item.episodes}</div>
            <div className="text-gray-400">Comments: {item.comments}</div>
          </div>
        </div>
      </NavLink>
      ))}
    </div>
  </div>
);

function AllAnime() {
  return (
      
    <div className="min-h-screen w-5/6 text-white p-2 ">
      <header className="flex flex-col sm:flex-row justify-between items-center mb-8">
        {/* <div className="text-2xl font-bold mb-4 sm:mb-0">Ani Watch</div> */}
        <div class="relative w-full max-w-xs">
  <input type="text" placeholder="Search anime..." class="bg-white text-black p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
  <button class="absolute inset-y-0 right-0 px-4 py-3 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
    </svg>
  </button>
</div>

      </header>
      <main className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <Section title="Top Airing" items={data.topAiring} />
        <Section title="Most Popular" items={data.mostPopular} />
        <Section title="Most Favorite" items={data.mostFavorite} />
        <Section title="Latest Completed" items={data.latestCompleted} />
      </main>
    </div>
  );
}

export default AllAnime;

