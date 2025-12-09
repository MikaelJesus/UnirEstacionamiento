import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Header() {
    return (
        <header className="header">
            <div className="header__brand">Estacionamiento Pro</div>
            <nav className="header__nav">
                <NavLink to="/" className={({ isActive }) => "header__link" + (isActive ? " header__link--active" : "")}>Dashboard</NavLink>
                <NavLink to="/parkings" className={({ isActive }) => "header__link" + (isActive ? " header__link--active" : "")}>Parkings</NavLink>
                <NavLink to="/users" className={({ isActive }) => "header__link" + (isActive ? " header__link--active" : "")}>Usuarios</NavLink>
                <NavLink to="/login" className={({ isActive }) => "header__link" + (isActive ? " header__link--active" : "")}>Login</NavLink>
            </nav>
        </header>
    );
}