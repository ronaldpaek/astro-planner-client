import React from 'react';
import airplaneLogo from '../assets/logo icon.svg';
import notificationIcon from '../assets/notification.svg';
import userProfilePhoto from '../assets/userPhoto.png';

export const Navbar = () => {
  return (
    <nav className="main-navbar">
      <ul className="navbar-list">
        <div className="flex">
          <li className="navbar-li">
            <img className="logo" src={airplaneLogo} alt="airplane-logo" />
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
            <img src={notificationIcon} alt="notifications" />
          </li>
          <li className="navbar-li">
            <img src={userProfilePhoto} alt="user profile photo" />
          </li>
        </div>
      </ul>
    </nav>
  );
};
