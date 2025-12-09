import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();
    const submit = e => {
        e.preventDefault();
        // demo: cualquier credencial acepta
        localStorage.setItem('parking_app_session', JSON.stringify({ user }));
        navigate('/');
    };
    return (
        <form className="form" onSubmit={submit}>
            <h2 className="form__title">Iniciar sesión</h2>
            <label className="form__label">Usuario</label>
            <input className="form__input" value={user} onChange={e => setUser(e.target.value)} required />
            <label className="form__label">Contraseña</label>
            <input className="form__input" type="password" value={pass} onChange={e => setPass(e.target.value)} required />
            <button className="form__submit">Entrar</button>
        </form>
    );
}