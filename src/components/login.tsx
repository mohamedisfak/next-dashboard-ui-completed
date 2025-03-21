import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // You can handle login logic here (e.g., API request to authenticate user)
    // For now, we just redirect to another page on successful login
    if (username === 'admin' && password === 'password') {
      router.push('/dashboard');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div>
      <div style={styles.header}>
        Smart Campus Login
      </div>

      <div style={styles.container}>
        <h2>Sign In</h2>
        
        <form onSubmit={handleSubmit}>

          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            placeholder="Enter your username" 
            required 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />

          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Enter your password" 
            required 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />

          <button type="submit" style={styles.submitBtn}>Sign In</button>

          <div style={styles.links}>
            <p>Don't have an account? <a href="/register">Register</a></p>
          </div>

        </form>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    background: 'linear-gradient(to right, #7b2ff7, #f107a3)',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  container: {
    width: '400px',
    margin: '50px auto',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    padding: '30px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
  },
  submitBtn: {
    width: '100%',
    backgroundColor: '#00c853',
    color: 'white',
    padding: '14px 20px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease',
  },
  submitBtnHover: {
    backgroundColor: '#00b248',
  },
  links: {
    textAlign: 'center',
    marginTop: '15px',
  },
};

export default Login;
