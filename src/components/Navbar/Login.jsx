import React, { useState } from 'react';
import "./Navbar.css"

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
  }

  return (
    <div className="login-page-container">
      <form onSubmit={handleSubmit}>
        <div className="login-page-container-contents">
          <label htmlFor="username" className="login__label">Username:</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={handleUsernameChange} 
          />
        </div>
        <div className="login-page-container-contents">
          <label htmlFor="password" className="login__label"> Password: </label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={handlePasswordChange} 
          />
        </div>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default LoginPage;
