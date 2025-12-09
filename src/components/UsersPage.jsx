import React, { useState } from 'react';
import useApi from '../hooks/useApi';
import UserCard from './UserCard';
import UserForm from './UserForm';


export default function UsersPage() {
    const api = useApi('users');
    const [editing, setEditing] = useState(null);


    return (
        <section className="users">
            <h2 className="users__title">Usuarios</h2>


            <div className="users__grid">
                {api.data.map(u => (
                    <UserCard key={u.id} user={u} onEdit={() => setEditing(u)} onDelete={() => api.remove(u.id)} />
                ))}
            </div>


            <div className="users__form">
                <UserForm onCreate={api.create} onUpdate={api.update} editing={editing} onFinish={() => setEditing(null)} />
            </div>
        </section>
    );
}