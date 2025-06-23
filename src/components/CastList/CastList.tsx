import React from 'react'
import CastMember from '../../models/CastMebmer';
import CastMemberCard from '../CastMemberCard/CastMemberCard';
import styles from './CartList.module.css'

export default async function CastList({ params }: Readonly<{ params: { id: string } }>) {
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


    const data = await res.json();
    const cast: CastMember[] = data.cast;

    return (
        <div className={styles.gridContainer}>
            {cast && cast.length > 0 ? (
                cast.slice(0, 4).map((member: CastMember) => (
                    <CastMemberCard key={member.cast_id} castMember={member} />
                ))
            ) : (
                <p className="empty-list-text-sm">No cast available.</p>
            )}
        </div>

    );
}