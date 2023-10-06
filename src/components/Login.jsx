import React from 'react';
import {
  BiLogoFacebookCircle,
  BiLogoGooglePlusCircle,
  BiLogoTwitter,
} from 'react-icons/bi';

const Login = () => {
  return (
    <div className="signup-container flex-col">
      <div className="wrapper">
        <h2>Get started</h2>
        <p className="text-gray">
          Don't have an account? <span className="signup-link">Sign up</span>
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
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Mitchel"
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Smith"
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="uihutofficial@gmail.com"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********"
          />
          <div className="flex">
            <p className="remember-me">Remember me</p>
            <p className="forgot-password">Forgot Password?</p>
          </div>
          <button className="signin-button">Sign in</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
