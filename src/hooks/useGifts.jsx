/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

export const useGifts = () => {
    const [gifts, setGifts] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        setLoading(true); 
        fetch("/data/data.json")
        .then((response) => {
            if(!response.ok) {
                throw new Error(`HTTP Error. Status ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            setGifts(data.gifts);
            setLoading(false);
        })
        .catch((e) => {
            setError(e.message);
            setLoading(false);
        });
    }, []);

    return { gifts, loading, error };
}