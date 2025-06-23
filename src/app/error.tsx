'use client';
import React, { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    readonly error: Error;
    readonly reset: () => void;
}) {
    useEffect(() => {
        console.error('Error occurred:', error);
    }, [error]);

    return (
        <div className='error-container'>
            <h1 className='error-message'>{error.message ||"Something went wrong"}</h1>
            <button className="hover:text-amber-300 p-4 " onClick={reset}>
                Try Again
            </button>
        </div>
    );
}
