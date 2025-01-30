import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
  const userLog = useSelector((state) => state.user);
  
  if (userLog.loading) {
    return <div className="loadingApp">Jutsu-Loading...</div>;
  }

  if (!userLog.user.length) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;