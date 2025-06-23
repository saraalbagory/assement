import Link from 'next/link';
import styles from './paganation.module.css';

export default function Pagination({ currentPage, totalPages, searchTerm }: Readonly<{
    currentPage: number,
    totalPages: number,
    searchTerm: string
}>) {
    const prevPage = currentPage > 1 ? currentPage - 1 : null;
    const nextPage = currentPage < totalPages ? currentPage + 1 : null;

    return (
        <div className={styles.paganationContainer}>
            {prevPage && (
                <Link
                    href={`/search/${searchTerm}?page=${prevPage}`}
                    className={styles.paganationButton}
                    title='prevois page'
                >
                    Prev
                </Link>
            )}
            <span className={styles.span} >{currentPage} / {totalPages}</span>
            {nextPage && (
                <Link
                    href={`/search/${searchTerm}?page=${nextPage}`}
                    className={styles.paganationButton}
                    title='Next page'
                >
                    Next
                </Link>
            )}
        </div>
    );
}
