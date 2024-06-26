import React from 'react';
import Searchbar from '@/components/search/Searchbar';
import Filter from '@/components/search/Filter';
import BookList from '@/components/search/BookList';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchPage: React.FC = () => {
    const books = [
        { id: 1, title: 'Buch 1', subtitle: 'Untertitel 1', isbn: '978-3-16-148410-0', rating: 4, price: 19.99, available: true, art: 'Kindle' },
        { id: 2, title: 'Buch 2', subtitle: 'Untertitel 2', isbn: '978-3-16-148410-1', rating: 5, price: 29.99, available: false, art: 'Buchdruck' },
        // Weitere Buchdaten hier hinzufügen
    ];

    return (
        <div className="container-fluid mt-3">
            <div className="row">
                <div className="col-md-2">
                    <Filter />
                </div>
                <div className="col-md-10">
                    <div className="row mb-3">
                        <div className="col">
                            <Searchbar />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <BookList books={books} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;