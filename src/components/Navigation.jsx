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
  FaRegBell,
} from 'react-icons/fa';
import logoIcon from '@/assets/moon-logo-v2.svg';

const Navigation = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <nav className="desktop-navigation">
      <div className="container">
        <ul className="navbar-list">
          <div className="navbar-list-fullwidth">
            <Link to="/" className="flex">
              <li className="navbar-list-fullwidth">
                <img
                  className="logo-icon"
                  src={logoIcon}
                  size={24}
                  alt="airplane-logo"
                />
              </li>
              <li style={{ fontWeight: 'bold' }} className="logo-type hide ">
                Astro Planner
              </li>
            </Link>
          </div>

          <div className="navbar-list-fullwidth">
            <li className="navbar-li">
              <Link className="flex" to={'/'}>
                <FaHome className="icon" />
                <span className="text home">Home</span>
              </Link>
            </li>
            <li className="navbar-li">
              <Link className="flex" to={'/things-to-do'}>
                <FaBriefcase className="icon" />
                <span className="text">To Do</span>
              </Link>
            </li>
            <li className="navbar-li">
              <Link className="flex" to={'/tour'}>
                <FaPlane className="icon" />
                <span className="text">Tour</span>
              </Link>
            </li>
            <li className="navbar-li">
              <Link className="flex" to={'/blog'}>
                <FaBlog className="icon" />
                <span className="text">Blog</span>
              </Link>
            </li>
          </div>
          <div className="navbar-list-fullwidth">
            <li className="navbar-li">
              <Link className="flex" to={'/usd'}>
                <FaDollarSign className="icon" />
                <span className="text">USD</span>
              </Link>
            </li>
            <li className="navbar-li">
              <Link className="flex" to={'/faqs'}>
                <FaQuestion className="icon" />
                <span className="text">FAQ</span>
              </Link>
            </li>
            <li className="navbar-li">
              <Link className="flex" to={'/notifications'}>
                <FaRegBell className="icon" />
              </Link>
            </li>
            <li className="navbar-li">
              <img src={userProfilePhoto} alt="user profile photo" />
            </li>
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
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
