import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Principal from "./components/Principal";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Login } from './components/Login';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/Principal" element={<App />} />
        <Route path="/" element={<Login />} />
        <Route path="/Proyectos" element={<Principal component="1" />} />
        <Route path="/Usuarios" element={<Principal component="2" />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);