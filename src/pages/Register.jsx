import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  BiLogoFacebookCircle,
  BiLogoGooglePlusCircle,
  BiLogoTwitter,
} from 'react-icons/bi';

import useRegister from '@/hooks/useRegister';
import registrationSchema from '@/schemas/registrationSchema';
import { useToken } from '@/contexts/TokenContext';

const Register = () => {
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const { setToken } = useToken();
  const register = useRegister((data) => {
    // Store the token in localStorage
    localStorage.setItem('token', data.token);
    // Set the token in the client
    setToken(data.token);
    navigate('/');
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target; // the form element
    const formData = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      password: form.password.value,
    };

    // Validate the form data against the schema using safeParse
    const { success, data, error } = registrationSchema.safeParse(formData);

    if (success) {
      // If validation is successful, clear previous errors
      setFormErrors({});

      // Send the data to the server
      register.mutate(data, {
        onError: (error) => {
          console.error('Registration error:', error);
        },
      });
    } else {
      // If validation fails, set errors to state
      const errorMessages = {};
      error.errors.forEach((err) => {
        // Map the error messages to fields
        errorMessages[err.path[0]] = err.message;
      });
      setFormErrors(errorMessages);
    }
  };

  return (
    <div className="form-wrapper">
      <div className="signup-container flex-col">
        <h2>Get started</h2>
        {/* <div className="flex">
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
        </div> */}
        {/* <p>or register with email</p> */}
        <form className="register-form flex-col" onSubmit={handleSubmit}>
          <div className="form-item">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Jane"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            {formErrors.firstName && (
              <p className="error">{formErrors.firstName}</p>
            )}
          </div>
          <div className="form-item">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            {formErrors.lastName && (
              <p className="error">{formErrors.lastName}</p>
            )}
          </div>
          <div className="form-item">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="example@example.com"
              value={formData.email}
              onChange={handleInputChange}
            />
            {formErrors.email && <p className="error">{formErrors.email}</p>}
          </div>
          <div className="form-item">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
            />
            {formErrors.password && (
              <p className="error">{formErrors.password}</p>
            )}
          </div>
          {/* <div className="flex">
            <label htmlFor="checkbox flex">
              <input type="checkbox" />
              Remember me
              <span style={{ fontSize: '14px' }} className="forgot-password">
                Forgot Password?
              </span>
            </label>
          </div> */}
          <button type="submit" className="register-button">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};
export default Register;
