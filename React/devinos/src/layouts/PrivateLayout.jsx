import Navegacion from '../Pages/Navegacion';
import Header from '../Pages/Header';
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