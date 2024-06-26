'use client';
import React, { useEffect, useState } from 'react';
import { Buch, BuchArt } from '@graphql/interfaces';
import { queryBuch } from '@graphql/queries';

interface BookDetailsProps {
    buchId: string;
}

const BookDetails: React.FC<BookDetailsProps> = ({ buchId }) => {
    const [buch, setBuch] = useState<Buch>();
    const [pending, setPending] = useState<Boolean>(true);

    useEffect(() => {
        if (pending) {
            queryBuch(buchId).then((buchQuery) => {
                if (buchQuery.data?.data?.buch) {
                    setBuch(buchQuery.data?.data?.buch);
                    setPending(false);
                }
            });
        }
    });

    const checkExistence = (value: any) => value ? value : 'n.a.';

    return (
        <div className="container">
            <div className="row gx-5">
                <div className="col-md-5 d-flex flex-column align-items-center">
                    <img src="https://via.placeholder.com/150" alt="Buchabbildung" className="img-fluid mb-4" style={{ maxWidth: '250px' }} />
                    <div className="text-center">
                        <p className="mb-2"><strong>Titel:</strong> {checkExistence(buch?.titel?.titel)}</p>
                        <p className="mb-2"><strong>Untertitel:</strong> {checkExistence(buch?.titel?.untertitel)}</p>
                        <p className="mb-2"><strong>ISBN:</strong> {checkExistence(buch?.isbn)}</p>
                        <p className="mb-2"><strong>Art:</strong> {buch?.art ? buch?.art : 'n.a.'}</p>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="row mb-3">
                        <div className="col-sm-4"><strong>Erschienen:</strong></div>
                        <div className="col-sm-8">{checkExistence(buch?.datum)}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-4"><strong>Rating:</strong></div>
                        <div className="col-sm-8">{checkExistence(buch?.rating)}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-4"><strong>Homepage:</strong></div>
                        <div className="col-sm-8">{buch?.homepage ? <a href={buch.homepage} target="_blank" rel="noopener noreferrer">{buch.homepage}</a> : 'n.a.'}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-4"><strong>Schlagwörter:</strong></div>
                        <div className="col-sm-8">{checkExistence(buch?.schlagwoerter?.join(', '))}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-4"><strong>Preis:</strong></div>
                        <div className="col-sm-8">{buch ? `${buch.preis.toFixed(2)} €` : 'n.a.'}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-4"><strong>Rabatt:</strong></div>
                        <div className="col-sm-8">{buch ? `${buch.rabatt}` : 'n.a.'}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-4"><strong>Lieferbar:</strong></div>
                        <div className="col-sm-8">{buch ? (buch.lieferbar ? 'Ja' : 'Nein') : 'n.a.'}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookDetails;
