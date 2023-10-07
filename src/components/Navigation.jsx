import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import airplaneLogo from '@/assets/logo icon.svg';
import notificationIcon from '@/assets/notification.svg';
import userProfilePhoto from '@/assets/userPhoto.png';
import { AiOutlineMenu } from 'react-icons/ai';
import {
  FaHome,
  FaBriefcase,
  FaPlane,
  FaBlog,
  FaDollarSign,
  FaQuestion,
} from 'react-icons/fa';
import logoIcon from '@/assets/moon-logo-v2.svg';

const Navigation = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <nav className="desktop-navigation">
      <ul className="navbar-list">
        <div className="flex">
          <Link to="/" className="flex">
            <li className="navbar-li">
              <img
                className="logo-icon"
                src={logoIcon}
                size={24}
                alt="airplane-logo"
              />
            </li>
            <li style={{ fontWeight: 'bold' }} className="navbar-li">
              Astro Planner
            </li>
          </Link>
        </div>

        <div className="navbar-list-fullwidth">
          <li className="navbar-li">
            <Link to={'/'}>
              <FaHome className="icon" />
              <span className="text home">Home</span>
            </Link>
          </li>
          <li className="navbar-li">
            <Link to={'/things-to-do'}>
              <FaBriefcase className="icon" />
              <span className="text">Things To Do</span>
            </Link>
          </li>
          <li className="navbar-li">
            <Link to={'/tour'}>
              <FaPlane className="icon" />
              <span className="text">Tour</span>
            </Link>
          </li>
          <li className="navbar-li">
            <Link to={'/blog'}>
              <FaBlog className="icon" />
              <span className="text">Blog</span>
            </Link>
          </li>
        </div>
        <div className="navbar-list-fullwidth">
          <li className="navbar-li">
            <Link to={'/usd'}>
              <FaDollarSign className="icon" />
              <span className="text">USD</span>
            </Link>
          </li>
          <li className="navbar-li">
            <Link to={'/faqs'}>
              <FaQuestion className="icon" />
              <span className="text">FAQ</span>
            </Link>
          </li>
          <li className="navbar-li">
            <Link to={'/notifications'}>
              <img src={notificationIcon} alt="notifications" />
            </Link>
          </li>
          <li className="navbar-li">
            <img src={userProfilePhoto} alt="user profile photo" />
          </li>
        </div>
        <div className="flex">
          <DarkModeToggle />
          <AiOutlineMenu
            className="menu-icon"
            size={30}
            onClick={handleShowNavbar}
          />
        </div>
        <div className="flex">
          <AiOutlineMenu
            className="menu-icon"
            size={30}
            onClick={handleShowNavbar}
          />
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
