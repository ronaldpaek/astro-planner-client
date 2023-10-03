import React from 'react';
import logo from '../assets/logo icon.svg';
import bell from '../assets/notification.svg';
import userPhoto from '../assets/userPhoto.png';

export const Navbar = () => {
  return (
    <nav className="navbar-container">
      <ul className="navbar">
        <div className="flex">
          <li className="navbar-li">
            <img src={logo} alt="airplane-logo" />
          </li>
          <li className="navbar-li">Wander Whisper Travels</li>
        </div>
        <div className="flex">
          <li className="navbar-li">Things To Do</li>
          <li className="navbar-li">Tour</li>
          <li className="navbar-li">Blog</li>
        </div>
        <div className="flex">
          <li className="navbar-li">USD</li>
          <li className="navbar-li">FAQ</li>
          <li className="navbar-li">
            <img src={bell} alt="notifications" />
          </li>
          <li className="navbar-li">
            <img src={userPhoto} alt="user profile photo" />
          </li>
        </div>
      </ul>
    </nav>
  );
};
