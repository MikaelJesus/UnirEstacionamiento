import React, { useState, useEffect } from 'react';
export default function UserForm({ onCreate, onUpdate, editing, onFinish }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('user');


    useEffect(() => {
        if (editing) {
            setName(editing.name);
            setEmail(editing.email);
            setRole(editing.role);
        } else {
            setName(''); setEmail(''); setRole('user');
        }
    }, [editing]);


    const submit = e => {
        e.preventDefault();
        if (editing) {
            onUpdate(editing.id, { name, email, role });
            onFinish();
        } else {
            onCreate({ id: `user-${Date.now()}`, name, email, role });
        }
    };


    return (
        <form className="form" onSubmit={submit}>
            <h3 className="form__title">{editing ? 'Editar usuario' : 'Crear usuario'}</h3>
            <label className="form__label">Nombre</label>
            <input className="form__input" value={name} onChange={e => setName(e.target.value)} required />
            <label className="form__label">Email</label>
            <input className="form__input" value={email} onChange={e => setEmail(e.target.value)} type="email" required />
            <label className="form__label">Rol</label>
            <select className="form__select" value={role} onChange={e => setRole(e.target.value)}>
                <option value="user">Usuario</option>
                <option value="admin">Administrador</option>
            </select>
            <button className="form__submit">{editing ? 'Actualizar' : 'Crear'}</button>
        </form>
    );
}