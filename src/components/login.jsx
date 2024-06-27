import React, { useState } from 'react';
import { signIn } from '../services/cognito';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const result = await signIn(username, password);
      console.log('Sign-in successful', result);
    } catch (error) {
      console.error('Error signing in', error);
    }
  };

  return (
    <div>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignIn;
