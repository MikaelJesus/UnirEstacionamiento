import { useState, useEffect } from 'react';

export default function useApi(resource) {
    const key = `parking_app_${resource}`;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        setLoading(true);
        try {
            const raw = localStorage.getItem(key);
            const parsed = raw ? JSON.parse(raw) : [];
            setData(parsed);
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }, [key]);


    const create = (item) => {
        const next = [...data, item];
        localStorage.setItem(key, JSON.stringify(next));
        setData(next);
    };


    const update = (id, patch) => {
        const next = data.map(d => d.id === id ? { ...d, ...patch } : d);
        localStorage.setItem(key, JSON.stringify(next));
        setData(next);
    };


    const remove = (id) => {
        const next = data.filter(d => d.id !== id);
        localStorage.setItem(key, JSON.stringify(next));
        setData(next);
    };


    const reset = (items) => {
        localStorage.setItem(key, JSON.stringify(items));
        setData(items);
    };


    return { data, loading, error, create, update, remove, reset };
}