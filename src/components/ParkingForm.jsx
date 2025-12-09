import React, { useState } from 'react';
import useApi from '../hooks/useApi';
import { useNavigate } from 'react-router-dom';


export default function ParkingForm() {
    const { create } = useApi('parkings');
    const [slot, setSlot] = useState('');
    const [plate, setPlate] = useState('');
    const navigate = useNavigate();


    const handleSubmit = e => {
        e.preventDefault();
        create({ id: `slot-${Date.now()}`, slot, plate, occupied: !!plate });
        navigate('/parkings');
    };


    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2 className="form__title">Crear nueva plaza</h2>
            <label className="form__label">Código de plaza</label>
            <input className="form__input" value={slot} onChange={e => setSlot(e.target.value)} required />
            <label className="form__label">Matrícula (opcional)</label>
            <input className="form__input" value={plate} onChange={e => setPlate(e.target.value)} />
            <button className="form__submit">Guardar</button>
        </form>
    );
}