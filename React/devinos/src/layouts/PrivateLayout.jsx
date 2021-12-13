import Navegacion from '../Pages/Navegacion';
import Header from '../Pages/Header';
import { Outlet } from 'react-router';
import React /*{ useEffect, useState }*/from 'react';
//import { useMutation } from '@apollo/client';
//import { useAuth } from '../Contexts/authContext';
//import { REFRESH_TOKEN } from '../Graphql/auth/mutations';
//import { useNavigate } from 'react-router-dom';

const PrivateLayout = () => {
/*
  const navigate = useNavigate();
  const { authToken, setToken } = useAuth();
  const [loadingAuth, setLoadingAuth] = useState(true);

  const [refreshToken, { data: dataMutation, loading: loadingMutation, error: errorMutation }] =
    useMutation(REFRESH_TOKEN);

  useEffect(() => {
    refreshToken();
  }, [refreshToken]);
*/
  /*
  useEffect(() => {
    if (dataMutation) {
      if (dataMutation.refreshToken.token) {
        setToken(dataMutation.refreshToken.token);
      } else {
        setToken(null);
        navigate('/auth/login');
      }
      setLoadingAuth(false);
    }
  }, [dataMutation, setToken, loadingAuth, navigate]);
*/
  //if (loadingMutation || loadingAuth) return <div>Loading...</div>;

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