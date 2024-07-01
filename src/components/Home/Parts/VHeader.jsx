import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './VHeader.css';

const VHeader = ({ links }) => {
  return (
    <div className="VHead">
      <div id='ULNav'>
        {links.map((link, index) => (
          <NavLink to={link.url} key={index} id='NavLink'>
            <button>
              <div className="text">
                <span>{link.text}</span>
              </div>
              <div className="clone">
                <span>{link.text.toUpperCase()}</span>
              </div>
              <svg
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
              >
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

VHeader.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default VHeader;
