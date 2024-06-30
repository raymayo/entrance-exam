import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isRegistered = localStorage.getItem('isRegistered');

  if (!isRegistered) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
