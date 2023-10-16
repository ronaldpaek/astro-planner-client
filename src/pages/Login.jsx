import {
  BiLogoFacebookCircle,
  BiLogoGooglePlusCircle,
  BiLogoTwitter,
} from 'react-icons/bi';

import { Link, useNavigate } from 'react-router-dom';

import useLogin from '@/hooks/useLogin';
import { useToken } from '@/contexts/TokenContext';

const Login = () => {
  const navigate = useNavigate();
  const { setToken } = useToken();

  const login = useLogin((data) => {
    console.log('response', data);
    // Store the token in localStorage
    localStorage.setItem('token', data.token);
    // Set the token in the client
    setToken(data.token);
    // Navigate to the home page
    navigate('/');
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData);
    login.mutate(formJson);
  };

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
        <form className="login-form flex-col" onSubmit={handleSubmit}>
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
              <span
                style={{ fontSize: '14px' }}
                className="forgot-password text"
              >
                Forgot Password?
              </span>
            </label>
          </div>
          <button className="signin-button" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
