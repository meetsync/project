import React, { useState } from 'react';
import '../style/CommonButton.css';

function UserButtons() {
  const [isNewUser, setIsNewUser] = useState(true);
  const [isReturningUser, setIsReturningUser] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUserButtonClick = (isNew) => {
    setIsNewUser(isNew);
    setIsReturningUser(false); // Ensure the login form is hidden when switching between registration and login
  };

  const validateEmail = (email) => {
    // Regular expression to validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  // FOR NEW USERS (REGISTRATION)
  const handleRegistration = async () => {
    if (isNewUser) {
      // Validate email and password in the frontend (add more robust validation).
      if (!email || !password) {
        alert('Please provide a valid email and password.');
        return;
      }

      // Check if email is in the correct format
      if (!validateEmail(email)) {
        alert('Please provide a valid email address.');
        return;
      }

      // Prepare registration data
      const registrationData = { name, email, password };
      const registrationEndpoint = '/api/Register';

      // Send a registration request to your backend.
      try {
        const response = await fetch(registrationEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(registrationData),
        });

        // Log the URL used in the request
       // console.log('Request URL:', registrationEndpoint);

        // Log the response status code
        console.log('Response status code:', response.status);

        if (response.ok) {
          // Registration was successful, handle as needed
          alert('Registration successful!');
          console.log('Registration Data:', registrationData);
        } else {
          // Handle non-JSON responses or other errors
          alert('An error occurred during registration.');
          console.log(registrationData)
        }
      } catch (error) {
        console.error('Registration error:', error);
        alert('An error occurred during registration.');
      }
    }
  };

  // FOR RETURNING USERS (LOGIN)
  const handleLogin = async () => {
    if (isReturningUser) {
      // Validate email and password in the frontend (add more robust validation).
      if (!email || !password) {
        alert('Please provide a valid email and password.');
        return;
      }

      // Check if email is in the correct format
      if (!validateEmail(email)) {
        alert('Please provide a valid email address.');
        return;
      }

      // Prepare login data
      const loginData = { email, password };

      // Send a login request to your backend
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginData),
        });

        console.log('Request URL:', '/api/login');
        console.log('Response status code:', response.status);

        if (response.status === 200) {
          // Login was successful, handle as needed
          alert('Login successful!');
          console.log('Login Data:', loginData);
        } else if (response.status === 400) {
          alert('User not found');
        } else if (response.status === 401) {
          alert('Invalid password');
        } else {
          alert('An error occurred during login.');
          console.log(loginData)
        }
      } catch (error) {
        console.error('Login error:', error);
        alert('An error occurred during login.');
      }
    }
  };

  return (
    <div className='app-container '>
      <div className="user-buttons">
        <div className="user-input-container">
          {isNewUser && (
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="buttons">
        <button
            className="common-button-container"
            onClick={() => handleUserButtonClick(true)}
          >
            New User
          </button>
          <button
            className="common-button-container"
            onClick={() => {
              handleUserButtonClick(false);
              setIsReturningUser(true);
            }}
          >
            Returning User
          </button>
          <button
            className="common-button-container"
            onClick={isNewUser ? handleRegistration : handleLogin}
          >
            {isNewUser ? 'Register' : 'Login'}
          </button>
        </div>
      </div>
    </div>
    
  );
}

export default UserButtons;

