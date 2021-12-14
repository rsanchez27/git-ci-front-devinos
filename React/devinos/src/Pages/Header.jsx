import React from "react";
import './Header.css';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../Contexts/authContext';




function Header() {
    const { setToken } = useAuth();

    const deleteToken = () => {

        console.log('eliminar token');
        setToken(null);
    };

    return (
        <header>
            <button onClick={() => deleteToken()}>
                <NavLink to='/'>
                        Cerrar Sesión
                </NavLink>
            </button>

        </header>
    );
}

export default Header;

