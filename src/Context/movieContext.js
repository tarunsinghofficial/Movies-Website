import React, { useEffect, createContext, useState } from 'react';
import { getTrending } from '../Services/apicontroller.js'

export const MovieContext = createContext();

export function MovieProvider({ children }) {
    const [trendingMovies, setTrending] = useState(null);

    useEffect(() => {
        async function getTrendings() {

            const response = await getTrending()
            const data = await response.json();
            setTrending(() => { return [...data.results] })
        }
        if (trendingMovies === null) { getTrendings() }
    }, [trendingMovies])

    return (
        <MovieContext.Provider value={[trendingMovies, setTrending]} >
            {children}
        </MovieContext.Provider>
    )
}
