import MoviesList from '@/src/components/MoviesList';

import React from 'react'
const API_KEY = process.env.API_KEY;
export default async function SearchPage({ params }: { params: { searchTerm: string } }) {
    const query = params.searchTerm;
    const searchURl = `/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`;
    const res = await fetch(`https://api.themoviedb.org/3${searchURl}`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`,
        },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch movies');
    }

    const movies = await res.json();

    return (
        <>
            {movies && movies.results && movies.results.length === 0 ? (
                <h1 className="text-center text-2xl font-bold mt-10">
                    No results found for {query}
                </h1>
            ) : (
                <MoviesList results={movies.results} />
            )}
        </>
    );
}
