import React from 'react';
import {
  BiLogoFacebookCircle,
  BiLogoGooglePlusCircle,
  BiLogoTwitter,
} from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="form-wrapper">
      <div className="signup-container flex-col">
        <h2>Get started</h2>
        <p className="text-gray">
          Don't have an account?{' '}
          <Link to="/register" className="signup-link">
            Sign up
          </Link>
        </p>
        <div className="flex">
          <ul className="social-icons flex">
            <li>
              <button className="social-button">
                <BiLogoFacebookCircle size={24} color="#4776D0" />
              </button>
            </li>
            <li>
              <button className="social-button">
                <BiLogoGooglePlusCircle size={24} />
              </button>
            </li>
            <li>
              <button className="social-button">
                <BiLogoTwitter size={24} color="#01AEEF" />
              </button>
            </li>
          </ul>
        </div>
        <p>or login with email</p>
        <form className="login-form flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter Your Email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********"
          />
          <div className="flex">
            <label htmlFor="checkbox flex">
              <input type="checkbox" />
              Remember me
              <span style={{ fontSize: '14px' }} className="forgot-password">
                Forgot Password?
              </span>
            </label>
          </div>
          <button className="signin-button">sign in</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
