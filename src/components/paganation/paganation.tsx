import Link from 'next/link';

export default function Pagination({ currentPage, totalPages, searchTerm }: Readonly<{
    currentPage: number,
    totalPages: number,
    searchTerm: string
}>) {
    const prevPage = currentPage > 1 ? currentPage - 1 : null;
    const nextPage = currentPage < totalPages ? currentPage + 1 : null;

    return (
        <div className="flex justify-center items-center gap-4 mt-8">
            {prevPage && (
                <Link
                    href={`/search/${searchTerm}?page=${prevPage}`}
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                    Prev
                </Link>
            )}
            <span className="font-bold">{currentPage} / {totalPages}</span>
            {nextPage && (
                <Link
                    href={`/search/${searchTerm}?page=${nextPage}`}
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                    Next
                </Link>
            )}
        </div>
    );
}
