import React, { useState } from 'react';

function SignUpForm() {
  // State hooks to manage form data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    // Form element with onSubmit handler
    <form onSubmit={handleSubmit} style={formStyle}>
      {/* Email input field */}
      <div style={inputContainerStyle}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
      </div>
      {/* Password input field */}
      <div style={inputContainerStyle}>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
      </div>
      {/* Submit button */}
      <button type="submit" style={buttonStyle}>Sign up</button>
    </form>
  );
}

// Inline styles for form components
const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '300px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
};

const inputContainerStyle = {
  marginBottom: '15px'
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  margin: '5px 0 10px 0',
  display: 'inline-block',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'border-box'
};

const buttonStyle = {
  backgroundColor: 'green',
  color: 'white',
  padding: '10px 15px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '4px 2px',
  borderRadius: '5px',
  cursor: 'pointer',
  border: 'none'
};

export default SignUpForm;
