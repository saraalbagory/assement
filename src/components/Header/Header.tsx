import Link from 'next/link'
import React from 'react'
import styles from './Header.module.css';


export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <Link title='go to home page' href="/" className={styles.navlink}>Home</Link>
                    <Link title='go to favorite page' href="/favorites" className={styles.navlink}>Favorites</Link>
                </nav>
            </div>
        </header>
    );
}

