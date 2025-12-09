import React, { useEffect, useState } from 'react';
import useApi from '../hooks/useApi';


export default function QuickStats() {
    const parkingsApi = useApi('parkings');
    const usersApi = useApi('users');
    const [occupied, setOccupied] = useState(0);


    useEffect(() => {
        const occ = parkingsApi.data.filter(p => p.occupied).length;
        setOccupied(occ);
    }, [parkingsApi.data]);


    return (
        <div className="quickstats">
            <div className="quickstats__item">Plazas totales: <strong>{parkingsApi.data.length}</strong></div>
            <div className="quickstats__item">Ocupadas: <strong>{occupied}</strong></div>
            <div className="quickstats__item">Usuarios registrados: <strong>{usersApi.data.length}</strong></div>
        </div>
    );
}