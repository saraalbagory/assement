import { create } from 'zustand'

import { persist } from 'zustand/middleware'


export type favMovie = {
    id: string,
    title: string,
    poster_path?: string
}

export type State = {
    movies: favMovie[]
}

export type Actions = {
    addFavMovie: (id: string, title: string,poster_path?:string) => void
    
    removeTask: (id: string) => void

}
export const useUserFavoritesStore = create<State & Actions>()(
    persist(
        (set) => ({
            movies: [],
            addFavMovie: (id, title, poster_path) =>
                set((state) => ({
                    movies: [...state.movies, { id, title, poster_path }],
                })),
            
            removeTask: (id) =>
                set((state) => ({
                    movies: state.movies.filter((movie) => movie.id !== id),
                })),
        }),
        {
            name: 'user-favorites',
        }
    )
)