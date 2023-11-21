import React, { useState } from 'react';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Simulating user authentication
    if (username === 'john' && password === '1234john') {
      // Successful login - you can redirect to another page or perform other actions
      console.log('Login successful for John');
    } else if (username === 'deniss' && password === 'deniss1234') {
      // Successful login - you can redirect to another page or perform other actions
      console.log('Login successful for Deniss');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div
      style={{
        width: '88vw',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        margin: 'auto',
        marginTop: '50px',
      }}
    >
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1A202C' }}>Login</h2>
      {error && <div style={{ color: '#E53E3E', marginBottom: '1rem' }}>{error}</div>}
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ fontSize: '0.875rem', color: '#4A5568', fontWeight: 'bold', marginBottom: '0.5rem' }} htmlFor="username">
          Username
        </label>
        <input
          style={{
            border: '1px solid #CBD5E0',
            borderRadius: '4px',
            padding: '0.5rem',
            width: '100%',
          }}
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ fontSize: '0.875rem', color: '#4A5568', fontWeight: 'bold', marginBottom: '0.5rem' }} htmlFor="password">
          Password
        </label>
        <input
          style={{
            border: '1px solid #CBD5E0',
            borderRadius: '4px',
            padding: '0.5rem',
            width: '100%',
          }}
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        style={{
          backgroundColor: '#4299E1',
          color: 'white',
          fontSize: '1rem',
          fontWeight: 'bold',
          padding: '0.75rem 1.5rem',
          borderRadius: '4px',
          cursor: 'pointer',
          border: 'none',
        }}
        type="button"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;
