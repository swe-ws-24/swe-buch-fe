// src/components/search/Searchbar.tsx
import React from 'react';

const Searchbar: React.FC = () => {
    return (
        <div className="input-group" style={{ flexGrow: 1 }}>
            <input type="text" className="form-control" placeholder="Suche z.B. 'Titel'" />
            <button className="btn btn-primary" type="button">Go</button>
        </div>
    );
};

export default Searchbar;