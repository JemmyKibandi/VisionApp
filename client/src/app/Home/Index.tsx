import React from 'react';
import { useRouter } from 'next/router';  // Import useRouter hook

const Index = () => {
  const router = useRouter(); // Initialize router

  const handleLoginRedirect = () => {
    router.push('/login');  // Redirect to login page
  };

  return (
    <div>
      <h1>Welcome to the Vision Board App</h1>
      <button onClick={handleLoginRedirect}>Go to Login</button>
    </div>
  );
};

export default Index;
