
'use client';
import React from 'react'
import {useRouter} from 'next/navigation'

export default function SearchBox() {
    const [searchTerm, setSearchTerm]=React.useState("");
    const router = useRouter();
    const handleSumit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!searchTerm.trim()) return;
        router.push(`/search/${searchTerm}`);
        console.log("Searching for:", searchTerm);
        setSearchTerm("");
    }
    return (
        <form className='flex justify-between px-5 max-w-6xl mx-auto' onSubmit={handleSumit}>
            <input type='text' placeholder='Search for a movie...' className='w-full h-14 rounded placeholder-gray-500 outline-none bg-transparent flex-1'
            value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}></input>
        <button  className='text-amber-300 disabled:text-gray-500' disabled={searchTerm===''}> Search</button></form>
    )
}
