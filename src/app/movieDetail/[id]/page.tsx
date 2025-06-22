import React from 'react';
import Image from 'next/image'
import CastList from '@/src/components/CastList';
import MovieDetailsModel from '@/src/models/MovieDetailsModel';

type genre = {
    id: number,
    name: string
}

export default async function MovieDetails({ params }: { params: { id: string } }) {
    const movieId = params.id;

    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        {
            headers: {
                Authorization: `Bearer ${process.env.API_KEY}`,
                accept: 'application/json',
            },
            next: { revalidate: 3600 },
        }
    );
    if (!res.ok) {
        throw new Error('Failed to fetch movie details');
    }

    const movie:MovieDetailsModel = await res.json();
    console.log("movie details", movie)


    return (

        <div className="relative w-full min-h-screen text-white">
            {/* Backdrop background */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <Image
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path} `}
                    alt={movie.title}
                    layout="fill"
                    objectFit="cover"
                    className="brightness-50"
                />
            </div>

            <div className="flex flex-col md:flex-row gap-8 p-8 max-w-6xl mx-auto">
                {/* Movie Poster */}
                <div className="flex-shrink-0 w-full md:w-1/3">
                    <Image
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                        width={500}
                        height={750}
                        className="rounded-xl shadow-lg"
                        priority
                    />
                </div>

                {/* Movie Info */}
                <div className="flex flex-col gap-4 md:w-2/3">
                    <h1 className="text-4xl font-bold">{movie.title}</h1>
                    <p className="text-sm text-gray-200">{movie.tagline}</p>

                    <div className="flex gap-4 text-sm text-gray-300">
                        <span>🕒 {movie.runtime} min</span>
                        <span>⭐ {movie.vote_average}/10</span>
                        <span>{movie.release_date}</span>
                    </div>

                    <div className="flex gap-2 flex-wrap text-sm">
                        {movie.genres.map((genre: genre) => (
                            <span
                                key={genre.id}
                                className="bg-white/10 px-3 py-1 rounded-full border border-white/20"
                            >
                                {genre.name}
                            </span>
                        ))}
                    </div>

                    <div>
                        <h2 className="text-xl mt-4 mb-2 font-semibold">Synopsis</h2>
                        <p className="text-gray-100">{movie.overview}</p>
                    </div>
                    <div >
                    <CastList key={movie.id} params={{ id: movieId }}/>
                    </div>

                    {/* <div>
                        <h2 className="text-xl mt-4 mb-2 font-semibold">Director</h2>
                        <p>{director?.name ?? 'N/A'}</p>
                    </div> */}

                    {/* <div>
                        <h2 className="text-xl mt-4 mb-2 font-semibold">Top Cast</h2>
                        <ul className="flex flex-wrap gap-2">
                            {topCast.map((actor) => (
                                <li key={actor.id} className="bg-white/10 px-3 py-1 rounded">
                                    {actor.name}
                                </li>
                            ))}
                        </ul>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

