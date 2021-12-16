import { useUser } from '../Contexts/userContext';
import React from 'react';

const PrivateRoute = ({ roleList, children }) => {
  const user = useUser();

  if (roleList.includes(user.userData.rol)) {
    return children;
  }

  return <div id="main-section">No estás autorizado para ver este sitio.</div>;
};

export default PrivateRoute;
