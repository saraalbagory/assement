import Link from "next/link"
import { favMovie } from "../store/userFavoritesStore"
import Image from "next/image"
import HeartButton from "./FavoriteButton"

const FavMovieCard = (movie: favMovie) => {
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

                {/* Favorite Button  */}
                <div className="absolute top-2 right-2">
                    <HeartButton movieId={movie.id} title={movie.title} poster_path={movie.poster_path} />
                </div>
            </div>

            <h2>{movie.title}</h2>




        </div>
    )
}

export default FavMovieCard