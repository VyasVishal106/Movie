import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RouterComponent from './Router.jsx';
import Home from './components/Home/Home.jsx';
// import Profile from './components/UserProfile/Profile.jsx';
import Anime from './components/Anime/Anime.jsx';
import MainPage from './components/Home/Parts/MainPage.jsx';
import AllPageHome from './components/Home/Parts/AllPageHome.jsx';
import TvShow from './components/Home/Parts/TvShow.jsx';
import Latest from './components/Home/Parts/Latest.jsx';
import Movies from './components/Movies/Movies.jsx';
// import MyList from './components/MyList/MyList.jsx';
import LogIn from './components/auth/login';
import SignIn from './components/auth/register';
import AnimeHome from './components/Anime/AnimeHome.jsx';
import Big3 from './components/Anime/Big3.jsx';
import AnimeLatest from './components/Anime/L_Anime.jsx';
import AllAnime from './components/Anime/AllAnime.jsx';
import MyAnimeList from './components/Anime/MyAnimeList.jsx';
import AnimeCh from './components/Anime/AnimeCh.jsx';
import WatchAnime from './components/Anime/WatchAnime.jsx';
import ErrorPage from './components/Error/Error.jsx';
import { AuthProvider } from './components/authContext/index.jsx';
import Chat from './components/Chat/IndexChat.jsx';
import AdminPanel from './components/AdminPanel/AdminPanel.jsx';
import ProfilePage from './components/UserProfile/Profile.jsx';
import Profile from './components/Profile Page/profile.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<RouterComponent />}>
          <Route index element={<Home />} />



          <Route path="Movies" element={<MainPage />}>
            <Route index element={<AllPageHome />} />
            <Route path="tv-shows" element={<TvShow />} />
            <Route path="latest" element={<Latest />} />
            <Route path="movies" element={<Movies />} />
            <Route path="My-list" element={<Profile />} />
          </Route>



          <Route path="LogIn" element={<LogIn />} />
          <Route path="AdminPanel" element={<AdminPanel />} />
          <Route path="Chat" element={<Chat />} />
          <Route path="/register" element={<SignIn />} />
          <Route path="Profile" element={<ProfilePage />} />
          <Route path="*" element={<ErrorPage />} />


          <Route path="Anime" element={<Anime />}>
            <Route index element={<AnimeHome />} />
            <Route path="Big3" element={<Big3 />} />
            <Route path="Animelatest" element={<AnimeLatest />} />
            <Route path="AnimeList" element={<AllAnime />} />
            <Route path="myAnimelist" element={<MyAnimeList />} />
            <Route path="Char" element={<AnimeCh />} />
            <Route path="Anime-Play" element={<WatchAnime />} />
          </Route>

          
        </Route>
      </Routes>
    </Router>
  </AuthProvider>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
