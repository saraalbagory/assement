import Link from 'next/link'
import React from 'react'


export default function Header() {
    return (
        <header className="bg-black text-white py-4 shadow-md">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-5">

                <nav className="flex gap-6 items-center space-x-4 mx-auto">
                    <Link href="/" className="hover:text-amber-300 transition">Home</Link>

                    <Link href="/favorites" className="hover:hover:text-amber-300 transition">Favorites</Link>
                </nav>
            </div>
        </header>
    );
}

