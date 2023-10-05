import React from "react";
import airplaneLogo from "../assets/logo icon.svg";
import notificationIcon from "../assets/notification.svg";
import userProfilePhoto from "../assets/userPhoto.png";
import { Link } from "react-router-dom";

export const Navbar = ({ user, setToken, setUser }) => {
  function handleLogout() {
    setToken("");
    setUser([]);
    localStorage.removeItem("token");
  }
  return (
    <nav className="main-navbar">
      <ul className="navbar-list">
        <div className="flex">
          <Link to={"/"}>
            <li className="navbar-li">
              <img className="logo" src={airplaneLogo} alt="airplane-logo" />
            </li>
            <li className="navbar-li">Wander Whisper Travels</li>
          </Link>
        </div>
        <div className="flex">
          <Link to={"/things-to-do"}>
            <li className="navbar-li">Things To Do</li>
          </Link>
          <Link to={"/tour"}>
            <li className="navbar-li">Tour</li>
          </Link>
          <Link to={"/blog"}>
            <li className="navbar-li">Blog</li>
          </Link>
        </div>
        <div className="flex">
          {/* Change currency?? */}
          <Link to={"/usd"}>
            <li className="navbar-li">USD</li>
          </Link>
          <Link to={"/faqs"}>
            <li className="navbar-li">FAQ</li>
          </Link>

          {!user.id ? (
            <>
              <Link to={"/login"}>Login</Link>
              <Link to={"/register"}>Register</Link>
            </>
          ) : (
            <>
              <Link to={"/notifications"}>
                <li className="navbar-li">
                  <img src={notificationIcon} alt="notifications" />
                </li>
              </Link>
              <Link to={`/users/${user.username}`}>
                <li className="navbar-li">
                  <img src={userProfilePhoto} alt="user profile photo" />
                </li>
              </Link>
              <Link onClick={handleLogout} to={"/"}>
                Logout
              </Link>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
};
