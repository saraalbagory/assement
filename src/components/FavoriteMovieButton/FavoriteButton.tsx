"use client";
import { useEffect, useMemo, useState } from "react";
import { favMovie, useUserFavoritesStore } from "@/src/store/userFavoritesStore";
import { FaHeart } from "react-icons/fa";
import styles from "./FavoriteButton.module.css";

type HeartButtonProps = {
    movieId: string;
    title: string;
    poster_path?: string;
};

export default function HeartButton({ movieId, title, poster_path }: Readonly<HeartButtonProps>) {
    const { movies, addFavMovie, removeTask } = useUserFavoritesStore();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);
    const isFavorite = useMemo(
    () => isClient && movies.some((movie: favMovie) => movie.id === movieId),
    [isClient, movies, movieId]
);
    
    if (!isClient) return null; // avoid hydration mismatch

    return (
        <button
            onClick={() => {
                if (isFavorite) {
                    removeTask(movieId);
                } else {
                    addFavMovie(movieId, title, poster_path);
                }
                // Print favorite movies after update
                setTimeout(() => {
                    console.log("Favorite movies:", movies);
                }, 0);
            }}
            className={`${styles.FavoriteButton} ${isFavorite ? styles.favorite : styles.isnotFavorite}`}
            title={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
            <FaHeart  size="1.5em"/>
        </button>
    );
}
