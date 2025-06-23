
'use client';
import React from 'react'
import {useRouter} from 'next/navigation'
import styles from './SearchBox.module.css'
export default function SearchBox() {
    const [searchTerm, setSearchTerm]=React.useState("");
    const router = useRouter();
    const handleSumit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!searchTerm.trim()) return;
        router.push(`/search/${searchTerm}?page=1`);
        console.log("Searching for:", searchTerm);
        setSearchTerm("");
    }
    return (
        <form className={styles.searchBox} onSubmit={handleSumit}>
            <input
                title='Search for movies'
                type='text'
                placeholder='Search for a movie...'
                className={styles.searchInput}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
                title='Search Button'
                className={styles.searchButton}
                disabled={searchTerm === ''}
            >
                Search
            </button>
        </form>
    );
}
