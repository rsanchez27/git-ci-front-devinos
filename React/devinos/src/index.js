import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);