import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import ParkingList from './components/ParkingList';
import ParkingForm from './components/ParkingForm';
import UsersPage from './components/UsersPage';
import Login from './components/Login';


export default function App() {
    return (
        <div className="app">
            <Header />
            <main className="main">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/parkings" element={<ParkingList />} />
                    <Route path="/parkings/new" element={<ParkingForm />} />
                    <Route path="/users" element={<UsersPage />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}