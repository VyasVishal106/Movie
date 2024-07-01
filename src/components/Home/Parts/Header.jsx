import React, { useState } from 'react';
import './Header.css';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../authContext';
import { doSignOut } from '../../../firebase/auth';

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const { userLoggedIn } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleSignOut = () => {
    doSignOut().then(() => {
      navigate('/LogIn');
    });
  };

  return (
    <header>
      <div className="left-div">
        <div id="menu-but" className="menu" onClick={toggleMenu}>
          <lord-icon
            src="https://cdn.lordicon.com/ipnwkgdy.json"
            trigger="hover"
            colors="primary:#ffffff"
            style={{ width: '30px', height: '30px' }}
          ></lord-icon>
          Menu
        </div>
      </div>

      <div className={`menu-hide ${menuVisible ? 'show-ani' : ''}`} id="show-menu-bar">
        <div id="close-menu-but" className="close-menu" onClick={toggleMenu}>
          <lord-icon
            src="https://cdn.lordicon.com/zxvuvcnc.json"
            trigger="hover"
            colors="primary:#000000"
            style={{ width: '50px', height: '50px' }}
          ></lord-icon>
        </div>

        <div className="NevHLink">
          <NavLink to="Movies" onClick={toggleMenu}>Movies</NavLink>
          <NavLink to="Anime" onClick={toggleMenu}>Anime</NavLink>
          <NavLink to="Profile" onClick={toggleMenu}>Profile</NavLink>
          <NavLink to="LogIn" onClick={toggleMenu}>Log in</NavLink>
        </div>
      </div>

      <div className="right-div-head">
        {userLoggedIn ? (
          <button className="btn" onClick={handleSignOut}>
            <div className="sign">
              <svg viewBox="0 0 512 512">
                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
              </svg>
            </div>
            <div className="text">Logout</div>
          </button>
        ) : (
          <>
          <Link className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition duration-300 ease-in-out transform hover:-translate-y-1" to="/login">
  Login
</Link>
<Link className="ml-4 bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800 transition duration-300 ease-in-out transform hover:-translate-y-1" to="/register">
  Register New Account
</Link>


          </>
        )}
      </div>
    </header>
  );
}

export default Header;
