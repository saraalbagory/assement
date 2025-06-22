import Image from "next/image";
import CastMember from "../models/CastMebmer";


export default function CastMemberCard({ castMember }: { castMember: CastMember }) {
    return (
        <div className="flex flex-col items-center justify-center m-2 p-2 bg-black rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out group">
            {castMember.profile_path ? (
                <Image
                    src={`https://image.tmdb.org/t/p/w500/${castMember.profile_path}`}
                    alt={castMember.name}
                    className="rounded-lg hover:scale-105 transition-transform duration-200 ease-in-out"
                    width={90}
                    height={100}
                />
            ) : (
                <div className="w-g4 h-30 bg-black rounded-lg flex items-center justify-center">
                    <span className="text-gray-50">No Image Available</span>
                </div>
            )}
            <h2 className="mt-0.5 text-white text-md font-semibold">{castMember.name}</h2>
            <p className="text-sm text-gray-500">{castMember.character}</p>
        </div>
    );
}