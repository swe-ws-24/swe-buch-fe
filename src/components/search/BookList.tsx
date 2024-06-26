'use client';
import React, { useEffect, useState } from 'react';
import {
    Buch,
    BuchFields,
    FilterParameter,
} from '@graphql/interfaces'
import { useSearchCriteria } from '@context/SearchCriteriaContext';
import { queryBuecher } from '@graphql/queries';
import { AxiosResponse } from 'axios';

const BookList: React.FC = () => {
    const [books, setBooks] = useState<Buch[]>([]);
    const { criteria } = useSearchCriteria();

    useEffect(() => {
        const fetchBooks = async () => {
            const queryFilter: FilterParameter[] = [];
            if (criteria.titel) {
                queryFilter.push({ key: 'titel', value: criteria.titel });
              }
              if (criteria.isbn) {
                queryFilter.push({ key: 'isbn', value: criteria.isbn });
              }
              if (criteria.art) {
                queryFilter.push({ key: 'art', value: criteria.art });
              }
              if (criteria.lieferbar) {
                queryFilter.push({ key: 'lieferbar', value: criteria.lieferbar });
              }
              if (criteria.rating) {
                queryFilter.push({ key: 'rating', value: criteria.rating });
              }
            const response = queryBuecher(
                [
                    BuchFields.id,
                    BuchFields.titel,
                    BuchFields.isbn,
                    BuchFields.art,
                    BuchFields.lieferbar,
                    BuchFields.rating,
                ],
                queryFilter
            );
            console.log(response);
        };
        
        fetchBooks();
    }, [criteria]);

    return (
        <div>
            {books.map((book: Buch) => (
                <div key={book.id} className="d-flex justify-content-between align-items-center mb-2 p-2 bg-light">
                    <div className="text-truncate me-2" style={{ minWidth: 0 }}>
                        <span>Buch: {book.titel.titel}, {book.titel.untertitel}, ISBN: {book.isbn}, Rating: {book.rating}, Preis: {book.preis} €</span>
                    </div>
                    <div className="flex-shrink-0">
                        <button className="btn btn-primary btn-sm me-1">Details</button>
                        <button className="btn btn-success btn-sm me-1">Edit</button>
                        <button className="btn btn-danger btn-sm">Del</button>
                    </div>
                </div>
            ))}
            <div className="mt-4 text-center">
                <div className="d-flex justify-content-center align-items-center">
                    <input type="text" className="form-control" placeholder="Neues Buch anlegen:" style={{width: '300px'}} />
                    <button className="btn btn-primary ms-2" style={{width: '80px'}}>Go</button>
                </div>
            </div>
        </div>
    );
};

export default BookList;