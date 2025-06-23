import MoviesList from '@/src/components/MoviesList/MoviesList';
import Pagination from '@/src/components/paganation/paganation';
import SearchBox from '@/src/components/SearchBox/search-box';
import React from 'react'

const API_KEY = process.env.API_KEY;

export default async function SearchPage({
    params,
    searchParams
}: Readonly<{
    params: { searchTerm: string },
    searchParams: { page?: string }
}>) {
    const query = params.searchTerm;
    const page = searchParams.page || "1";
    
    let movies = null;
    
    try {
        const searchURL = `/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=${page}`;
        const res = await fetch(`https://api.themoviedb.org/3${searchURL}`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`,
            },
            next: { revalidate: 3600 } // Cache for 1 hour
        });

        if (!res.ok) throw new Error(`Failed to fetch movies (Status: ${res.status})`);
        movies = await res.json();
        
    } catch (error: unknown) {
        return (
            <>
                <SearchBox />
                <div className="error-container">
                    <h1 className="text-2xl font-bold text-red-600 mb-2">
                        Failed to load search results
                    </h1>
                    <p className="text-gray-600">
                        {error instanceof Error ? error.message : 'Please try again later'}
                    </p>
                    
                </div>
            </>
        );
    }

    return (
        <>
            <SearchBox />
            {movies.results.length === 0 ? (
                <h1 className="text-center text-2xl font-bold mt-10">
                    No results found for {query}
                </h1>
            ) : (
                <>
                    <MoviesList results={movies.results} />
                    <Pagination
                        currentPage={parseInt(page)}
                        totalPages={movies.total_pages}
                        searchTerm={query}
                    />
                </>
            )}
        </>
    );
}