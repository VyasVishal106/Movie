import React from 'react';
import Header from './components/Home/Parts/Header';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from './components/authContext'; // Make sure the path is correct

const Router = () => {
  return (
    <AuthProvider>
      <Header />
      <Outlet />
    </AuthProvider>
  );
};

export default Router;
