import React from 'react';
import Image from 'next/image'
import MovieDetailsModel from '@/src/models/MovieDetailsModel';
import dynamic from 'next/dynamic';
import CastList from '@/src/components/CastList/CastList';
import './MovieDetails.css';


type genre = {
    id: number,
    name: string
}

//try moving the lazyloading of the heartbutton to check if it will work correctly

const HeartButton = dynamic(() => import('@/src/components/FavoriteMovieButton/FavoriteButton'), {});
export default async function MovieDetails({ params, }: Readonly<{ params: { id: string } }>) {
    const { id } = await params;
    const movieId = id;

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

    const movie: MovieDetailsModel = await res.json();



    return (

        <div className="movie-details-page">
            <div className="movie-details-bg">
                <Image
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
                    alt={movie.title}
                    layout="fill"
                    objectFit="cover"
                    className="movie-details-bg"
                />
            </div>

            <div className="movie-details-container">
                <div className="poster">
                    <Image
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                        width={500}
                        height={750}
                        priority
                    />
                </div>

                <div className="details">
                    <h1>{movie.title}</h1>
                    <p className="tagline">{movie.tagline}</p>
                    <div className="meta">
                        <span>🕒 {movie.runtime} min</span>
                        <span>⭐ {movie.vote_average}/10</span>
                        <span>{movie.release_date}</span>
                    </div>
                    <div className="genres">
                        {movie.genres.map((genre:genre) => (
                            <span key={genre.id} className="genre-badge">
                                {genre.name}
                            </span>
                        ))}
                    </div>
                    <div className="synopsis">{movie.overview}</div>
                    <div className="fav-container">
                        <span>Add to favorites</span>
                        <HeartButton movieId={movie.id} title={movie.title} poster_path={movie.poster_path} />
                    </div>
                    <CastList key={movie.id} params={{ id: movieId }} />
                </div>
            </div>
        </div>
    );
}

