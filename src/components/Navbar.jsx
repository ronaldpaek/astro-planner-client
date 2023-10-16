import { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import {
  FaHome,
  FaBriefcase,
  FaDollarSign,
  FaQuestion,
  FaRegBell,
} from 'react-icons/fa';
import { RiAccountCircleFill } from 'react-icons/ri';
import { AiOutlineLogin } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import DarkModeToggle from '@/components/DarkModeToggle';
import logoIcon from '@/assets/moon-logo-v2.svg';
import userProfilePhoto from '@/assets/userPhoto.png';

import useUser from '@/hooks/useUser';
import { removeToken } from '@/lib/token';
import { useToken } from '@/contexts/TokenContext';

const Navbar = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { data: user } = useUser();
  const [showNavbar, setShowNavbar] = useState(false);
  const { token, setToken } = useToken();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
    // using below class to disable scrolling & add overlay on Mobile after the menu is opened
    document.body.classList.toggle('navbar-open');
    console.log('it works');
  };

  const handleLogout = () => {
    navigate('/');
    // Remove the token from localStorage
    removeToken();
    // Remove the token from the client
    setToken(null);
    // Invalidate the user query
    queryClient.invalidateQueries({ queryKey: ['user'] });
  };

  console.log('user', user);
  console.log('token', token);

  return (
    <nav className="desktop-navigation">
      <div className="navbar-container">
        <ul className="navbar-list">
          <div className="navbar-list-fullwidth">
            <li className="navbar-list-fullwidth">
              <Link className="flex" to={'/'}>
                <img
                  className="logo-icon"
                  src={logoIcon}
                  size={24}
                  alt="Astroplanner Logo"
                />
                <span style={{ fontWeight: 'bold' }} className="logo-type hide">
                  Astro Planner
                </span>
              </Link>
            </li>
          </div>
          <div
            className={`navbar-list-fullwidth navbar-none ${
              showNavbar ? 'active' : 'hide'
            }`}
          >
            <li className="navbar-li">
              <NavLink className="flex" to={'/create-trip'}>
                <FaBriefcase className="icon" />
                <span className="nav-text">Create Trip</span>
              </NavLink>
            </li>
            {user?.id ? (
              <>
                <span>Welcome {user.firstName}</span>
                <NavLink onClick={handleLogout} to={'/'}>
                  Logout
                </NavLink>
              </>
            ) : (
              <>
                <li className="navbar-li">
                  <NavLink className="flex" to="/login">
                    <AiOutlineLogin className="icon" />
                    <span className="nav-text">Login</span>
                  </NavLink>
                </li>
                <li className="navbar-li">
                  <NavLink className="flex" to="/register">
                    <RiAccountCircleFill className="icon" />
                    <span className="nav-text">Register</span>
                  </NavLink>
                </li>
              </>
            )}
          </div>

          <div
            className={`navbar-list-fullwidth ${
              showNavbar ? 'active' : 'hide'
            }`}
          >
            {/* <li className="navbar-li">
              <Link className="flex" to={'/faqs'}>
                <FaQuestion className="icon" />
                <span className="nav-text">FAQ</span>
              </Link>
            </li>
            <li className="navbar-li notifications">
              <Link className="flex" to={'/notifications'}>
                <FaRegBell className="icon" />
                <span className="nav-text">Notifications</span>
              </Link>
            </li>
            <li className="navbar-li">
              <img src={userProfilePhoto} alt="user profile photo" />
            </li> */}
          </div>

          <div className="theme-toggle">
            <DarkModeToggle />
            <AiOutlineMenu
              className="menu-icon d-lg-none"
              size={30}
              onClick={handleShowNavbar}
            />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
