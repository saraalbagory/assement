'use client';

import { favMovie, useUserFavoritesStore } from "@/src/store/userFavoritesStore";
import dynamic from "next/dynamic";
import Image from "next/image"
import React, { useMemo, useState, useEffect } from 'react'

const FavMovieCard = dynamic(() => import('@/src/components/FavoriteMoviesCard/favMovieCard'), {
  ssr: false,
  loading: () => (
    <div className='centered-container'>
      <Image
        src="/spinner.svg"
        alt="Loading..."
        width={50}
        height={50}
        priority
      />
    </div>
  ),
});

export default function Favorites() {
  const movies: favMovie[] = useUserFavoritesStore((state) => state.movies);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const uniqueMovies = useMemo(() =>
    Array.from(new Map(movies.map(movie => [movie.id, movie])).values()),
    [movies]
  );

  if (isLoading) {
    return (
      <div className='centered-container'>
        <Image
          src="/spinner.svg"
          alt="Loading..."
          width={50}
          height={50}
          priority
        />
      </div>
    );
  }

  if (uniqueMovies.length === 0) {
    return (
      <div className='centered-container'>
        <h1 className='empty-list-text'>No favorite movies found</h1>
      </div>
    );
  }

  return (
    <div className='list-grid'>
      {uniqueMovies.map((movie) => (
        <FavMovieCard
          key={movie.id}
          {...movie}
        />
      ))}
    </div>
  );
}