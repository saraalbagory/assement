import React from 'react'
import { Movie } from '../../models/Movies'
import Link from 'next/link'
import Image from 'next/image'
//import HeartButton from '../FavoriteMovieButton/FavoriteButton'


const MovieCard = (movie: Movie) => {
    return (
        <div className='flex flex-col  items-center justify-center m-2 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out group'>
            <div className="relative w-[250px] h-[400px]">
                {/* Movie Image */}
                <Link href={`/movieDetail/${movie.id}`}>
                    <Image
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt={movie.title}
                        width={250}
                        height={400}
                        className="rounded-lg hover:scale-105 transition-transform duration-200 ease-in-out"
                    />
                </Link>
            </div>
            <h2>{movie.original_title || movie.title}</h2>
            <p className='text-sm text-gray-500'>{movie.release_date}</p>
            <span>⭐ {movie.vote_average}/10</span>


        </div>
    )
}

export default MovieCard