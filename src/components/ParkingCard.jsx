import React from 'react';
export default function ParkingCard({ parking, onUpdate, onDelete }) {
    const toggle = () => onUpdate(parking.id, { occupied: !parking.occupied });
    return (
        <article className={`parking-card ${parking.occupied ? 'parking-card--occupied' : ''}`}>
            <div className="parking-card__slot">{parking.slot}</div>
            <div className="parking-card__plate">{parking.plate || '---'}</div>
            <div className="parking-card__actions">
                <button onClick={toggle} className="parking-card__btn">{parking.occupied ? 'Liberar' : 'Ocupar'}</button>
                <button onClick={() => onDelete(parking.id)} className="parking-card__btn parking-card__btn--danger">Eliminar</button>
            </div>
        </article>
    );
}