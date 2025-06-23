import CastMember from "@/src/models/CastMebmer";
import Image from "next/image";
import styles from "@/src/components/CastMemberCard/CastMemberCard.module.css";

/**
 * CastMemberCard component displays a cast member's profile picture, name, and character.
 * If the profile picture is not available, it shows a placeholder.
 *
 * @param {Object} props - The component props.
 * @param {CastMember} props.castMember - The cast member data.
 * @returns {JSX.Element} The rendered component.
 */
export default function CastMemberCard({ castMember }: Readonly<{ castMember: CastMember }>) {
    return (
        <div className={styles.castContainer}>
            {castMember.profile_path ? (
                <Image
                    src={`https://image.tmdb.org/t/p/w500/${castMember.profile_path}`}
                    alt={castMember.name}
                    className="cardImage"
                    width={90}
                    height={100}
                />
            ) : (
                <div className={styles.fallbackimage}>
                    <span className={styles.castName}>No Image Available</span>
                </div>
            )}
            <h2 className={styles.castName}>{castMember.name}</h2>
            <p className={styles.castCharacter}>{castMember.character}</p>
        </div>
    );
}