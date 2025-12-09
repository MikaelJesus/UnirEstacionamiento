import React from 'react';
export default function UserCard({ user, onEdit, onDelete }) {
    return (
        <div className="user-card">
            <div className="user-card__name">{user.name}</div>
            <div className="user-card__email">{user.email}</div>
            <div className="user-card__roles">{user.role}</div>
            <div className="user-card__actions">
                <button onClick={onEdit} className="user-card__btn">Editar</button>
                <button onClick={onDelete} className="user-card__btn user-card__btn--danger">Eliminar</button>
            </div>
        </div>
    );
}