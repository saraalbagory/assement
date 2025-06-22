import React from 'react'
import CastMember from '../models/CastMebmer';
import CastMemberCard from './CastMemberCard';

export default async function CastList({ params }: { params: { id: string } }) {
    const movieId = params.id;
    console.log("Movie ID:", movieId);
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
        {
            headers: {
                Authorization: `Bearer ${process.env.API_KEY}`,
                accept: 'application/json',
            },
            next: { revalidate: 3600 },
        }
    );
    if (!res.ok) {

        throw new Error('Failed to fetch cast details');
    }

    console.log("cast details", res)

    const data = await res.json();
    const cast: CastMember[] = data.cast;

    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-auto py-4">
            {cast && cast.length > 0 ? (
                cast.slice(0,4).map((member: CastMember) => (
                    <CastMemberCard key={member.cast_id} castMember={member} />
                ))
            ) : (
                <p className="text-gray-500">No cast available.</p>
            )}
        </div>

    );
}