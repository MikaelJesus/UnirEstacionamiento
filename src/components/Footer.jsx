import React from 'react';
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__text">{new Date().getFullYear()} Estacionamiento Pro</div>
        </footer>
    );
}