import React, { useState, useEffect } from 'react';
import FilterPanel from './FilterPanel';
import { Link } from 'react-router-dom';
import useApi from '../hooks/useApi';
import SearchBar from '../components/SearchBar';
import ParkingCard from '../components/ParkingCard';

export default function ParkingList() {
    const { data, loading, update, remove, reset } = useApi('parkings');
    const [query, setQuery] = useState('');
    const [filter, setFilter] = useState('all');
    const [filtered, setFiltered] = useState([]);


    useEffect(() => {
        let list = data;
        if (query) {
            const q = query.toLowerCase();
            list = list.filter(p => p.slot.toLowerCase().includes(q) || (p.plate || '').toLowerCase().includes(q));
        }
        if (filter === 'occupied') list = list.filter(p => p.occupied);
        if (filter === 'free') list = list.filter(p => !p.occupied);
        setFiltered(list);
    }, [data, query, filter]);


    // Lista demo de lugares
    useEffect(() => {
        if (!loading && data.length === 0) {
            const sample = Array.from({ length: 8 }).map((_, i) => ({
                id: `slot-${i + 1}`,
                slot: `P-${i + 1}`,
                occupied: i % 3 === 0,
                plate: i % 3 === 0 ? `ABC-123${i}` : '',
            }));
            reset(sample);
        }
    }, [loading]);


    return (
        <section className="parking">
            <div className="parking__controls">
                <SearchBar value={query} onChange={setQuery} placeholder="Buscar por plaza o matrícula" />
                <FilterPanel value={filter} onChange={setFilter} />
                <Link to="/parkings/new" className="parking__add">Nueva plaza</Link>
            </div>


            {loading ? <div>Cargando...</div> : (
                <div className="parking__grid">
                    {filtered.map(p => <ParkingCard key={p.id} parking={p} onUpdate={update} onDelete={remove} />)}
                </div>
            )}
        </section>
    );
}