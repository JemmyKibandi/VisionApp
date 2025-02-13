// Mark this component as a client component
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';  // Correct import for navigation in App Directory

const Login = () => {
  const [username, setUsername] = useState('');
  const router = useRouter(); // useRouter hook for navigation

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., authentication)
    router.push("/dashboard"); // Redirect to dashboard after successful login
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
