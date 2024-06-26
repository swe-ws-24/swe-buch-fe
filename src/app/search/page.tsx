'use client';
import React from 'react';
import Searchbar from '@/components/search/Searchbar';
import Filter from '@/components/search/Filter';
import BookList from '@/components/search/BookList';
import { SearchCriteriaProvider } from '@context/SearchCriteriaContext';
import Anlegebutton from '@/components/searchPage/Anlegebutton';

const SearchPage: React.FC = () => {
    return (
        <SearchCriteriaProvider>
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-md-2 p-0">
                        <Filter />
                    </div>
                    <div className="col-md-10">
                        <div className="d-flex flex-column h-100">
                            <div className="row mb-3">
                                <div className="col p-2">
                                    <Searchbar />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <BookList />
                                </div>
                            </div>
                            <div className='mt-auto p-3'>
                                <Anlegebutton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SearchCriteriaProvider>
    );
};

export default SearchPage;