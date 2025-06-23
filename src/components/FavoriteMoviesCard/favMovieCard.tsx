import Link from "next/link"

import Image from "next/image"
import HeartButton from "../FavoriteMovieButton/FavoriteButton"
import { favMovie } from "@/src/store/userFavoritesStore"

const FavMovieCard = (movie: favMovie) => {
    return (
        <div className='card-flex' title={movie.title}>
            <div className="imageContainer">
                {/* Movie Image */}
                <Link href={`/movieDetail/${movie.id}`}>
                    <Image
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt={movie.title}
                        width={250}
                        height={400}
                        className="card-image"
                    />
                </Link>

                {/* Favorite Button  */}
                <div className="absloute-position">
                    <HeartButton movieId={movie.id} title={movie.title} poster_path={movie.poster_path} />
                </div>
            </div>

            <h2>{movie.title}</h2>




        </div>
    )
}

export default FavMovieCard