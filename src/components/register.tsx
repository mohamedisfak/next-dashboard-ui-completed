import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Register: React.FC = () => {
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Here, you can add logic to handle registration, such as making an API request
    // For now, we're just simulating a successful registration
    alert('Registration successful!');
    router.push('/login');
  };

  return (
    <div>
      <div style={styles.header}>Smart Campus Register</div>

      <div style={styles.container}>
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Enter your full name"
            required
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />

          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Choose a username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Create a password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit" style={styles.submitBtn}>Register</button>

          <div style={styles.links}>
            <p>Already have an account? <a href="/login">Sign In</a></p>
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

export default Register;
