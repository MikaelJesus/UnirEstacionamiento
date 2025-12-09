import React from 'react';
import { Link } from 'react-router-dom';
import QuickStats from './QuickStats';


export default function Dashboard() {
    return (
        <section className="dashboard">
            <h1 className="dashboard__title">Panel de control</h1>
            <QuickStats />
            <div className="dashboard__cards">
                <Link to="/parkings" className="dashboard__card">Ver estacionamientos</Link>
                <Link to="/users" className="dashboard__card">Gestionar usuarios</Link>
            </div>
        </section>
    );
}