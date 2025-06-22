"use client"; // Ensure it's a Client Component
import { FaHeart } from "react-icons/fa";
import { favMovie, useUserFavoritesStore } from "../store/userFavoritesStore";
import { favMovieProps } from "../models/FavMovieProps";

// type HeartButtonProps = {
//     movieId: string;
//     title: string;
//     poster_path?: string;
// };

export default function HeartButton({ movieId, title, poster_path }: Readonly<favMovieProps>) {
    const { movies, addFavMovie, removeTask } = useUserFavoritesStore ();

    //Check if the movie is in favorites
    const isFavorite = movies.some((movie:favMovie) => movie.id === movieId);

    return (
        <button
            onClick={() => isFavorite ? removeTask(movieId) : addFavMovie(movieId, title, poster_path)}
            className={`text-2xl transition ${isFavorite ? "text-amber-400" : "text-gray-400"}`}
            title={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
            <FaHeart />
        </button>
    );
}

