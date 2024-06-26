// src/components/details/BookDetails.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface BookDetailsProps {
    title: string;
    subtitle: string;
    art: 'DRUCKAUSGABE' | 'KINDLE';
    date: string;
    rating: number;
    homepage: string;
    keywords: string[];
    price: number;
    discount: number;
    isbn: string;
    available: boolean;
    imageUrl: string;
}

const BookDetails: React.FC<BookDetailsProps> = ({
    title,
    subtitle,
    art,
    date,
    rating,
    homepage,
    keywords,
    price,
    discount,
    isbn,
    available,
    imageUrl,
}) => {
    return (
        <div className="container">
            <div className="row gx-5">
                <div className="col-md-5 d-flex flex-column align-items-center">
                    <img src={imageUrl} alt="Buchabbildung" className="img-fluid mb-4" style={{ maxWidth: '250px' }} />
                    <div className="text-center">
                        <p className="mb-2"><strong>Titel:</strong> {title}</p>
                        <p className="mb-2"><strong>Untertitel:</strong> {subtitle}</p>
                        <p className="mb-2"><strong>ISBN:</strong> {isbn}</p>
                        <p className="mb-2"><strong>Art:</strong> {art === 'DRUCKAUSGABE' ? 'Buchdruck' : 'Kindle'}</p>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="row mb-3">
                        <div className="col-sm-4"><strong>Erschienen:</strong></div>
                        <div className="col-sm-8">{date}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-4"><strong>Rating:</strong></div>
                        <div className="col-sm-8">{rating}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-4"><strong>Homepage:</strong></div>
                        <div className="col-sm-8"><a href={homepage} target="_blank" rel="noopener noreferrer">{homepage}</a></div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-4"><strong>Schlagwörter:</strong></div>
                        <div className="col-sm-8">{keywords.join(', ')}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-4"><strong>Preis:</strong></div>
                        <div className="col-sm-8">{price.toFixed(2)} €</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-4"><strong>Rabatt:</strong></div>
                        <div className="col-sm-8">{discount.toFixed(2)} %</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-4"><strong>Lieferbar:</strong></div>
                        <div className="col-sm-8">{available ? 'Ja' : 'Nein'}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookDetails;