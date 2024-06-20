import React from 'react';

const Searchbar: React.FC = () => {
    return (
        <div className="input-group mb-3 shadow">
            <input type="text" className="form-control" placeholder="Suche z.B. 'Titel', 'ISBN'" aria-label="Search" aria-describedby="search-button" />
            <button className="btn btn-primary" type="button" id="search-button">Search</button>
        </div>
    );
};

export default Searchbar;