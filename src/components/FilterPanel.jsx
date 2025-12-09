import React from 'react';
export default function FilterPanel({ value, onChange }) {
    return (
        <div className="filter">
            <label className="filter__label">Mostrar:</label>
            <select className="filter__select" value={value} onChange={e => onChange(e.target.value)}>
                <option value="all">Todos</option>
                <option value="occupied">Ocupados</option>
                <option value="free">Libres</option>
            </select>
        </div>
    );
}