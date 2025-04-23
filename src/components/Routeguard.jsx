// src/components/RouteGuard.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const RouteGuard = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('authToken'); // mock auth check
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={`/login?redirect=${location.pathname}`} replace />;
  }

  return children;
};

export default RouteGuard;
