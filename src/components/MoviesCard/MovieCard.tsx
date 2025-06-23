import React from 'react'
import { Movie } from '../../models/Movies'
import Link from 'next/link'
import Image from 'next/image'



const MovieCard = (movie: Movie) => {
    return (
        <div title={movie.title} className='card-flex'>
            <div className="imageContainer">
                {/* Movie Image */}
                <Link href={`/movieDetail/${movie.id}`}>
                    <Image
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt={movie.title}
                        width={250}
                        height={400}
                        title={`Click to view ${movie.original_title} details`}
                        className="card-image"
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