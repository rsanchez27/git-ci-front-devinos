import React from 'react'
import Login from './components/Login'
import Proyectos from './components/Proyectos';
import Usuarios from './components/Usuarios';
import Index from './components/Index';
import SignUp from './components/SignUp';
//import Navegacion from './components/Navegacion';
import PrivateLayout from './layouts/PrivateLayout';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/Index' element={<PrivateLayout />}>
          <Route path='/Index' element={<Index />} />
          <Route path="/Index/Proyectos" element={<Proyectos/>} />
          <Route path="/Index/Usuarios" element={<Usuarios/>} />
        </Route>
        <Route path='/' element={<Login />} />
        <Route path='/Registro' element={<SignUp />} />
      </Routes>

    </Router>
  );
}

export default App;
