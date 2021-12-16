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
            <div>
                <button >
                    <NavLink to='/Index/Perfil'>
                        Mi Perfil
                    </NavLink>
                </button>
                <button onClick={() => deleteToken()}>
                    <NavLink to='/'>
                        Cerrar Sesión
                    </NavLink>
                </button>

            </div>


        </header>
    );
}

export default Header;

