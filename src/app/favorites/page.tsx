'use client';

import { favMovie, useUserFavoritesStore } from "@/src/store/userFavoritesStore";
import dynamic from "next/dynamic";
import Image from "next/image"
import React, { useMemo } from 'react'


const FavMovieCard = dynamic(() => import('@/src/components/FavoriteMoviesComponents/favMovieCard'), {
  ssr: false,
  loading: () => <div className="flex justify-center items-center w-full h-40">
      <Image
        src="/public/spinner.svg"
        alt="Loading..."
        width={50}
        height={50}
      />
    </div>,
});

export default function Favorites() {
  const movies: favMovie[] = useUserFavoritesStore((state) => state.movies);

  //useMemo to avoid unnecessary re-renders "filtering the movies array"
  //const filteredMovies = useMemo(() => movies.filter(movie => movie.isFavorite), [movies]);
  const uniqueMovies = useMemo(() =>
    Array.from(new Map(movies.map(movie => [movie.id, movie])).values()),
    [movies]
  );

  if (movies.length === 0) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <h1 className='text-2xl text-gray-500'>No favorite movies found</h1>
      </div>
    );
  }

  return (
    <div className='bg-grey-500 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-4 mx-auto py-4'>
      {uniqueMovies.map((movie) => (
        <FavMovieCard
          key={movie.id}
          {...movie}
        />
      ))}
    </div>
  );
}
