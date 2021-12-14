import React, { useState, useEffect } from 'react'
import Login from './Pages/Login'
import ProyectosA from './Pages/ProyectosA';
import ProyectosL from './Pages/ProyectosL';
import ProyectosE from './Pages/ProyectosE';
import Usuarios from './Pages/UsuariosA';
import Index from './Pages/Index';
import SignUp from './Pages/SignUp';
import EditarUsuario from './Pages/EditarUsuario';
import EditarProyecto from './Pages/EditarProyectos';
import Estudiantes from './Pages/Estudiantes';
import PrivateLayout from './layouts/PrivateLayout';
import { AuthContext } from './Contexts/authContext';
import { setContext } from '@apollo/client/link/context';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import jwt_decode from 'jwt-decode';
import AuthLayout from './layouts/AuthLayout';
import { UserContext } from './Contexts/userContext';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = JSON.parse(localStorage.getItem('token'));
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});





const App = () => {
  const [userData, setUserData] = useState({});
  const [authToken, setAuthToken] = useState('');

  const setToken = (token) => {
    console.log('set token', token);
    setAuthToken(token);
    if (token) {
      localStorage.setItem('token', JSON.stringify(token));
    } else {
      localStorage.removeItem('token');
    }
  };


  useEffect(() => {
    if (authToken) {
      const decoded = jwt_decode(authToken);
      setUserData({
        _id: decoded._id,
        nombre: decoded.nombre,
        identificacion: decoded.identificacion,
        correo: decoded.correo,
        rol: decoded.rol,
      });
    }
  }, [authToken]);

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={{ authToken, setAuthToken, setToken }}>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Router>
            <Routes>
              <Route path='/Index' element={<PrivateLayout />}>
                <Route path='/Index' element={<Index />} />
                <Route path="/Index/Admin/Proyectos" element={<ProyectosA />} />
                <Route path="/Index/Lider/Proyectos" element={<ProyectosL />} />
                <Route path="/Index/Estudiante/Proyectos" element={<ProyectosE />} />
                <Route path="/Index/Usuarios" element={<Usuarios />} />
                <Route path="/Index/Estudiantes" element={<Estudiantes />} />
                <Route path="/Index/usuarios/editar/:_id" element={<EditarUsuario />} />
                <Route path="/Index/Proyectos/editar/:_id" element={<EditarProyecto />} />
              </Route>
              <Route path='/' element={<AuthLayout />}>
                <Route path='' element={<Login />} />
                <Route path='Registro' element={<SignUp />} />
              </Route>
            </Routes>

          </Router>
        </UserContext.Provider>
      </AuthContext.Provider>
    </ApolloProvider >
  );
}

export default App;
