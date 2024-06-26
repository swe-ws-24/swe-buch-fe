import React from 'react';
import {
    Buch,
} from '@graphql/interfaces'

interface BookListProps {
    books: Buch[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
    return (
        <div>
            {books.map((book: Buch) => (
                <div key={book.id} className="d-flex justify-content-between align-items-center mb-2 p-2 bg-light">
                    <div className="text-truncate me-2" style={{ minWidth: 0 }}>
                        {/* Achte darauf, dass die Feldnamen im Interface und hier übereinstimmen */}
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