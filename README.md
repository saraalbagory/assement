# Movie App

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
It allows users to search for movies, view details, and manage a list of favorite movies.

## Features

- Search for movies using The Movie Database (TMDB) API
- View detailed information about each movie
- Add or remove movies from your favorites
- Responsive design for desktop and mobile
- Pagination for search results

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (or you can adapt for npm/yarn if needed)
- Node.js 18 or later

### Installation

1. **Extract the zip** (if you downloaded as a zip).
2. **Open your terminal** and navigate to the project directory.
3. **Install dependencies:**
    ```sh
    bun install
    ```
4. **Set up environment variables:**
    - Create a `.env.local` file in the root directory.
    - Add your TMDB API key:
      ```
      API_KEY=your_tmdb_api_key_here
      ```

5. **Run the development server:**
    ```sh
    bun dev
    ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Project Structure

```
assement/
├── public/                     # Static assets (images, favicon, etc.)
├── src/
│   ├── app/                    # Next.js app directory (routes, pages)
│   │   └── movieDetail/
│   │   └── search/
│   │   └── favorites/
|   |   └── error.tsx
|   |   └── layout.tsx
|   |   └── loading.tsx
|   |   └── globals.css
|   |   └── page.tsx
│   ├── components/             # Reusable React components
│   │   └── FavoriteMovieButton/
│   │   └── MoviesList/
│   │   └── CastMemberCard/
|   |   └── FavoriteMovieCard/
|   |   └── MovieCard/
|   |   └── paganation/
|   |   └── SearchBox/
│   ├── models/                 # TypeScript models and types
│   ├── store/                  # Zustand store for favorites
├── .env.local                  # Environment variables (not committed)
├── README.md                   # Project documentation
├── package.json                # Project metadata and scripts
```

## Design Decisions & Challenges
One of the challenges I faced was figuring out when to split parts of the UI into separate components, and when to make them client-side rendered ("use client"). It wasn’t always clear if breaking things up would help or make things more complex, especially in terms of performance. I tried to split components when it made the code easier to manage or reuse, and used client components only when needed — such as for interactive features like the favorite button.

Another issue came up with the large number of movies from the API. Initially, rendering all the results at once caused performance problems and made the page feel slow. To improve this, I implemented pagination, which loads a smaller set of movies at a time. This made the app more responsive and user-friendly.

I also ran into problems with updating the favorites feature using Zustand. When I added or removed a movie from favorites, the UI didn’t always reflect the change right away. After some debugging, I realized I needed to make sure the components were properly subscribed to the store and that the state was being updated in a way that triggered re-renders. Once I adjusted how I was using Zustand, the updates worked as expected.


