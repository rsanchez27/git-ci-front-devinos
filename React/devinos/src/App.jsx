import React from 'react'
import Login from './Pages/Login'
import Proyectos from './Pages/Proyectos';
import Usuarios from './Pages/Usuarios';
import Index from './Pages/Index';
import SignUp from './Pages/SignUp';
import EditarUsuario from './Pages/EditarUsuario';
import Estudiantes from './Pages/Estudiantes';
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
          <Route path="/Index/Estudiantes" element={<Estudiantes/>} />
          <Route path="/Index/usuarios/editar/:_id" element={<EditarUsuario/>} />
        </Route>
        <Route path='/' element={<Login />} />
        <Route path='/Registro' element={<SignUp />} />
      </Routes>

    </Router>
  );
}

export default App;
