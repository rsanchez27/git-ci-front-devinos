import Navegacion from '../components/Navegacion';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import React from 'react';
const PrivateLayout = () => {

  return (
    <div >
      <div >
        <Header />
      </div>
      <div >
        <Navegacion />
      </div>
      <div >
        <Outlet />
      </div>
    </div>
  );
};

export default PrivateLayout;