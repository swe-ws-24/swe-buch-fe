// src/components/adminPanel/BookForm.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookForm: React.FC = () => {
    return (
        <form>
            <div className="row">
                <div className="col-md-6">
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="isbn" className="col-sm-4 col-form-label text-nowrap">ISBN</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="isbn" placeholder="ISBN eingeben" />
                        </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="rating" className="col-sm-4 col-form-label text-nowrap">Rating</label>
                        <div className="col-sm-8">
                            <input type="number" className="form-control" id="rating" placeholder="Rating eingeben" />
                        </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="type" className="col-sm-4 col-form-label text-nowrap">Art</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="type" placeholder="Art eingeben" />
                        </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="price" className="col-sm-4 col-form-label text-nowrap">Preis</label>
                        <div className="col-sm-8">
                            <input type="number" step="0.01" className="form-control" id="price" placeholder="Preis eingeben" />
                        </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="discount" className="col-sm-4 col-form-label text-nowrap">Rabatt</label>
                        <div className="col-sm-8">
                            <input type="number" step="0.01" className="form-control" id="discount" placeholder="Rabatt eingeben" />
                        </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="available" className="col-sm-4 col-form-label text-nowrap">Lieferbar</label>
                        <div className="col-sm-8">
                            <select className="form-control" id="available">
                                <option>Ja</option>
                                <option>Nein</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="date" className="col-sm-4 col-form-label text-nowrap">Datum</label>
                        <div className="col-sm-8">
                            <input type="date" className="form-control" id="date" />
                        </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="keywords" className="col-sm-4 col-form-label text-nowrap">Schlagwörter</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="keywords" placeholder="Schlagwörter eingeben" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    {/* Admin Username wird hier hinzugefügt */}
                    <div className="row mb-3">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-8">
                            <strong>Admin: AdminUser</strong>
                        </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="id" className="col-sm-4 col-form-label text-nowrap">Id</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="id" placeholder="Id eingeben" readOnly />
                        </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="title" className="col-sm-4 col-form-label text-nowrap">Titel</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="title" placeholder="Titel eingeben" />
                        </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="subtitle" className="col-sm-4 col-form-label text-nowrap">Untertitel</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="subtitle" placeholder="Untertitel eingeben" />
                        </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="homepage" className="col-sm-4 col-form-label text-nowrap">Homepage</label>
                        <div className="col-sm-8">
                            <input type="url" className="form-control" id="homepage" placeholder="Homepage eingeben" />
                        </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="description" className="col-sm-4 col-form-label text-nowrap">Beschriftung</label>
                        <div className="col-sm-8">
                            <textarea className="form-control" id="description" rows={3} placeholder="Beschriftung eingeben"></textarea>
                        </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                        <label htmlFor="contentType" className="col-sm-4 col-form-label text-nowrap">ContentType</label>
                        <div className="col-sm-8">
                            <select className="form-control" id="contentType">
                                <option>Romane</option>
                                <option>Thriller</option>
                                <option>Krimi</option>
                                <option>Science-Fiction</option>
                                <option>Fantasy</option>
                                <option>Sachbuch</option>
                                <option>Biografie</option>
                                <option>Kinderbuch</option>
                                <option>Liebesroman</option>
                                <option>Historischer Roman</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="images" className="col-sm-4 col-form-label text-nowrap">Abbildungen</label>
                        <div className="col-sm-8">
                            <input
                                type="file"
                                className="form-control-file"
                                id="images"
                                multiple
                            />
                            <small id="fileHelp" className="form-text text-muted mt-1">
                                Keine ausgewählt
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default BookForm;