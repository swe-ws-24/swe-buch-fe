'use client';
import React, { useEffect, useState } from 'react';
import {
    Buch,
    BuchFields,
    FilterParameter,
} from '@graphql/interfaces'
import { useSearchCriteria } from '@context/SearchCriteriaContext';
import { queryBuecher } from '@graphql/queries';
import Link from 'next/link';

const BookList: React.FC = () => {
    const [books, setBooks] = useState<Buch[]>([]);
    const [error, setError] = useState<string>("");
    const { criteria } = useSearchCriteria();

    useEffect(() => {
        console.log(criteria);
        const response = queryBuecher(
            criteria,
        ).then((response) => {
            console.log(response);
            if (response.status == 200){
                if (response.data.data.buecher) {
                    setBooks(response.data.data.buecher);
                    setError("");
                } else {
                    setBooks([]);
                    if (response.data.errors.length >= 1) {
                        setError(response.data.errors[0].message)
                    }
                }
            }
        });
    }, [criteria]);

    return (
        <div>
            {error}
            {books.map((book: Buch) => (
                <div key={book.id} className="d-flex justify-content-between align-items-center mb-2 p-2 bg-light">
                    <div className="text-truncate me-2" style={{ minWidth: 0 }}>
                        <span>Buch: {book.titel.titel}, {book.titel.untertitel}, ISBN: {book.isbn}, Rating: {book.rating}, Preis: {book.preis} €</span>
                    </div>
                    <div className="flex-shrink-0">
                        <Link href={`/details/${book.id}`} className="btn btn-primary btn-sm me-1">Details</Link>
                        <button className="btn btn-success btn-sm me-1">Edit</button>
                        <button className="btn btn-danger btn-sm">Del</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BookList;