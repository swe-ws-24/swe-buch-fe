// src/components/adminPanel/BookForm.tsx
import React from 'react';

const BookForm: React.FC = () => {
    return (
        <form>
            <div className="row">
                <div className="col-md-6">
                    {/* Titel */}
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="title" className="col-sm-4 col-form-label text-nowrap">Titel</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="title" placeholder="Titel eingeben" />
                        </div>
                    </div>
                    {/* Untertitel */}
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="subtitle" className="col-sm-4 col-form-label text-nowrap">Untertitel</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="subtitle" placeholder="Untertitel eingeben" />
                        </div>
                    </div>
                    {/* Erschienen */}
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="date" className="col-sm-4 col-form-label text-nowrap">Erschienen</label>
                        <div className="col-sm-8">
                            <input type="date" className="form-control" id="date" />
                        </div>
                    </div>
                    {/* Art */}
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="type" className="col-sm-4 col-form-label text-nowrap">Art</label>
                        <div className="col-sm-8">
                            <select className="form-control" id="type">
                                <option value="DRUCKAUSGABE">Buchdruck</option>
                                <option value="KINDLE">Kindle</option>
                            </select>
                        </div>
                    </div>
                    {/* ISBN */}
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="isbn" className="col-sm-4 col-form-label text-nowrap">ISBN</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="isbn" placeholder="ISBN eingeben" />
                        </div>
                    </div>
                    {/* Preis */}
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="price" className="col-sm-4 col-form-label text-nowrap">Preis</label>
                        <div className="col-sm-8">
                            <input type="number" step="0.01" className="form-control" id="price" placeholder="Preis eingeben" />
                        </div>
                    </div>
                    {/* Rabatt */}
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="discount" className="col-sm-4 col-form-label text-nowrap">Rabatt</label>
                        <div className="col-sm-8">
                            <input type="number" step="0.01" className="form-control" id="discount" placeholder="Rabatt eingeben" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    {/* Klappentext */}
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="description" className="col-sm-4 col-form-label text-nowrap">Klappentext</label>
                        <div className="col-sm-8">
                            <textarea className="form-control" id="description" rows={3} placeholder="Klappentext eingeben"></textarea>
                        </div>
                    </div>
                    {/* Schlagwörter */}
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="keywords" className="col-sm-4 col-form-label text-nowrap">Schlagwörter</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="keywords" placeholder="Schlagwörter eingeben (kommagetrennt)" />
                        </div>
                    </div>
                    {/* Lieferbar */}
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="available" className="col-sm-4 col-form-label text-nowrap">Lieferbar</label>
                        <div className="col-sm-8">
                            <select className="form-control" id="available">
                                <option value="true">Ja</option>
                                <option value="false">Nein</option>
                            </select>
                        </div>
                    </div>
                    {/* Homepage */}
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="homepage" className="col-sm-4 col-form-label text-nowrap">Homepage</label>
                        <div className="col-sm-8">
                            <input type="url" className="form-control" id="homepage" placeholder="Homepage eingeben" />
                        </div>
                    </div>
                    {/* Rating */}
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="rating" className="col-sm-4 col-form-label text-nowrap">Rating</label>
                        <div className="col-sm-8">
                            <input type="number" className="form-control" id="rating" placeholder="Rating eingeben" />
                        </div>
                    </div>
                    {/* Id */}
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="id" className="col-sm-4 col-form-label text-nowrap">Id</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="id" placeholder="Id" readOnly />
                        </div>
                    </div>
                    {/* Abbildungen */}
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="images" className="col-sm-4 col-form-label text-nowrap">Abbildungen</label>
                        <div className="col-sm-8">
                            <input type="file" className="form-control-file" id="images" multiple />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default BookForm;