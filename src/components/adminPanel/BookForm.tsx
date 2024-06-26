// src/components/adminPanel/BookForm.tsx
import { BuchArt } from '@/graphql/interfaces';
import React, { useState } from 'react';

const BookForm: React.FC = () => {
    const [isbn, setIsbn] = useState<string>("");  // Done
    const [rating, setRating] = useState<number>(5);  // Done
    const [art, setArt] = useState<BuchArt>(BuchArt.KINDLE);  // Done
    const [preis, setPreis] = useState<number>(0.0);  // Done
    const [rabatt, setRabatt] = useState<number>(0.0); // Done
    const [lieferbar, setLieferbar] = useState<boolean>(true); // Done
    const [datum, setDatum] = useState<string>("");  // Done
    const [homepage, setHomepage] = useState<string>("");  // Done
    const [schlagwort, setSchlagwort] = useState<string>(""); // Done
    const [schlagwoerter, setSchlagwoerter] = useState<string[]>([]); // Done
    const [titel, setTitel] = useState<string>("");  // Done
    const [untertitel, setUntertitel] = useState<string>(""); // Done
    const [beschriftung, setBeschriftung] = useState<string>(""); // Done
    const [contentType, setContentType] = useState<string>("");

    const [error, setError] = useState<string>("");


    const addBook = () => {
        // Alle nicht null werte prüfen
        if (
            titel !== "" && titel !== null &&
            beschriftung !== "" && beschriftung !== null &&
            contentType !== "" && contentType !== null
        ) {
            // GraphQL Mutation
            const data = {
                isbn: isbn,
                rating: rating,
                art: art as BuchArt,
                preis: preis,
                rabatt: rabatt,
                lieferbar: lieferbar,
                datum: datum,
                homepage: homepage,
                schlagwoerter: schlagwoerter,
                titel: {
                    titel: titel,
                    untertitel: untertitel,
                },
                abbildung: {
                    beschriftung: beschriftung,
                    contentType: contentType,
                },
            };

            console.log(data);


        } else {
            setError("Du musst alle Pflichtfelder korrekt ausfüllen");
        }
    };

    return (
        <form>
            <div className="row">
                <div className="col-md-6">
                    {/* Titel */}
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="title" className="col-sm-4 col-form-label text-nowrap">Titel</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="title" placeholder="Titel eingeben" value={titel} onChange={
                                (e) => {
                                    setTitel(e.target.value);
                                }
                            } />
                        </div>
                    </div>
                    {/* Untertitel */}
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="subtitle" className="col-sm-4 col-form-label text-nowrap">Untertitel</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="subtitle" placeholder="Untertitel eingeben" value={untertitel} onChange={
                                (e) => {
                                    setUntertitel(e.target.value);
                                }
                            }/>
                        </div>
                    </div>
                    {/* Erschienen */}
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="date" className="col-sm-4 col-form-label text-nowrap">Erschienen</label>
                        <div className="col-sm-8">
                            <input type="date" className="form-control" id="date" value={datum} onChange={
                                (e) => {
                                    setDatum(e.target.value);
                                }
                            } />
                        </div>
                    </div>
                    {/* Art */}
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="type" className="col-sm-4 col-form-label text-nowrap">Art</label>
                        <div className="col-sm-8">
                            <select className="form-control" id="type" onChange={
                                (e) => {
                                    setArt(e.target.value as BuchArt);
                                }
                            }>
                                <option value={BuchArt.DRUCKAUSGABE}>Druckausgabe</option>
                                <option value={BuchArt.KINDLE}>Kindle</option>
                            </select>
                        </div>
                    </div>
                    {/* ISBN */}
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="isbn" className="col-sm-4 col-form-label text-nowrap">ISBN</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="isbn" placeholder="ISBN eingeben" value={isbn} onChange={
                                (e) => {
                                    setIsbn(e.target.value);
                                }
                            } />
                        </div>
                    </div>
                    {/* Preis */}
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="price" className="col-sm-4 col-form-label text-nowrap">Preis</label>
                        <div className="col-sm-8">
                            <input type="number" min="0.00" step="0.01" className="form-control" id="price" placeholder="Preis eingeben" value={preis} onChange={
                                (e) => {
                                    setPreis(Number(e.target.value));
                                }
                            } />
                        </div>
                    </div>
                    {/* Rabatt */}
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="discount" className="col-sm-4 col-form-label text-nowrap">Rabatt</label>
                        <div className="col-sm-8">
                            <input type="number" min="0.00" step="0.01" className="form-control" id="discount" placeholder="Rabatt eingeben" value={rabatt} onChange={
                                (e) => {
                                    setRabatt(Number(e.target.value));
                                }
                            } />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    {/* Schlagwörter */}
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="keywords" className="col-sm-4 col-form-label text-nowrap">Schlagwörter</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="keywords" placeholder="Schlagwort" value={schlagwort} onChange={
                                (e) => {
                                    setSchlagwort(e.target.value);
                                }
                            } />
                        </div>
                        <div className="col-sm-1">
                            <button className="btn btn-primary" onClick={
                                (e) => {
                                    e.preventDefault();
                                    setSchlagwoerter([...schlagwoerter, schlagwort]);
                                    setSchlagwort("");
                                }
                            }>
                                +
                            </button>
                        </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="keywords" className="col-sm-4 col-form-label text-nowrap">Schlagwörter</label>
                        <div className="col-sm-8">
                            {
                                schlagwoerter.map((wort, index) => (
                                <div key={index}>
                                    {wort}
                                </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* Lieferbar */}
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="available" className="col-sm-4 col-form-label text-nowrap">Lieferbar</label>
                        <div className="col-sm-8">
                            <select className="form-control" id="available" value={Number(lieferbar)} onChange={
                                (e) => {
                                    const newValue = Boolean(Number(e.target.value));
                                    setLieferbar(newValue);
                                }
                            }>
                                <option value="1">Ja</option>
                                <option value="0">Nein</option>
                            </select>
                        </div>
                    </div>
                    {/* Homepage */}
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="homepage" className="col-sm-4 col-form-label text-nowrap">Homepage</label>
                        <div className="col-sm-8">
                            <input type="url" className="form-control" id="homepage" placeholder="Homepage eingeben" value={homepage} onChange={
                                (e) => {
                                    setHomepage(e.target.value);
                                }
                            } />
                        </div>
                    </div>
                    {/* Rating */}
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="rating" className="col-sm-4 col-form-label text-nowrap">Rating</label>
                        <div className="col-sm-8">
                            <input type="number" min="1" max="5" className="form-control" id="rating" placeholder="Rating eingeben" value={rating} onChange={
                                (e) => {
                                    setRating(Number(e.target.value));
                                }
                            } />
                        </div>
                    </div>
                    {/* Abbildungen */}
                    <h5>Beschriftungen:</h5>
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="images" className="col-sm-4 col-form-label text-nowrap">Beschriftung</label>
                        <div className="col-sm-8">
                        <input type="text" min="1" max="5" className="form-control" id="rating" placeholder="Beschriftung eingeben" value={beschriftung} onChange={
                                (e) => {
                                    setBeschriftung(e.target.value);
                                }
                            } />
                        </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="images" className="col-sm-4 col-form-label text-nowrap">ContentType</label>
                        <div className="col-sm-8">
                        <input type="text" min="1" max="5" className="form-control" id="rating" placeholder="ContentType eingeben" value={contentType} onChange={
                                (e) => {
                                    setContentType(e.target.value);
                                }
                            } />
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-4">
                <div className="d-flex justify-content-center align-items-center p-3 border rounded shadow-sm me-3" style={{ height: '40px', minWidth: '100px' }}>
                    {
                        error
                    }
                </div>
                <button className="btn btn-primary" onClick={
                    (e) => {
                        e.preventDefault();
                        addBook();
                    }
                }>
                    Hinzufügen
                </button>
            </div>
        </form>
    );
}

export default BookForm;