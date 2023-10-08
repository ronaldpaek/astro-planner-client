import React from 'react';
import {
  BiLogoFacebookCircle,
  BiLogoGooglePlusCircle,
  BiLogoTwitter,
} from 'react-icons/bi';

const Register = () => {
  return (
    <div className="form-wrapper">
      <div className="signup-container flex-col">
        <h2>Get started</h2>
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
        <p>or register with email</p>
        <form className="register-form flex-col">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter Your First Name"
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter Your Last Name"
          />
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
          <button className="register-button">Register</button>
        </form>
      </div>
    </div>
  );
};
export default Register;
