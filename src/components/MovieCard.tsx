import React from 'react'
import { Movie } from '../models/Movies'
import Link from 'next/link'
import Image from 'next/image'

const MovieCard = (movie: Movie) => {
    return (
        <div className='flex flex-col  items-center justify-center m-2 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out group'>
            <Link href={`/movieDetail/${movie.id}`}>
                <Image
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path ?? movie.backdrop_path}`}
                    alt={movie.original_title}
                    width={250}
                    height={400}
                    className='rounded-lg hover:scale-105 transition-transform duration-200 ease-in-out'

                />
            </Link>
            <h2>{movie.original_title || movie.title}</h2>
            <p className='text-sm text-gray-500'>{movie.release_date}</p>
            {/* TO:do add star for rating */}
            <p className=''>{movie.vote_average}</p>


        </div>
    )
}

export default MovieCard