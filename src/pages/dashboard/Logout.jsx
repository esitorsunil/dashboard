// components/Logout.jsx
import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    navigate('/login?loggedOut=true', { replace: true });
  };

  return (
    <Button
      variant="link"
      className="text-white text-start nav-link rounded px-3 py-2 mb-2 w-100"
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
};

export default Logout;
