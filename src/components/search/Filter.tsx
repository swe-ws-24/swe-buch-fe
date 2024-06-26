'use client';
import React, { useState } from 'react';
import { useSearchCriteria } from '@context/SearchCriteriaContext';
import { BuchArt, SuchkriterienInput } from '@/graphql/interfaces';


const Filter: React.FC = () => {
    const [lieferbar, setLieferbar] = useState<boolean>(true);
    const [rating, setRating] = useState<number>(5);
    const [buchArt, setBuchArt] = useState<BuchArt>(BuchArt.KINDLE);
    const { criteria, setCriteria } = useSearchCriteria();

    const propagateSearch = () => {
        const suchkriterien: SuchkriterienInput = {
            titel: criteria.titel,
            isbn: "",
            lieferbar: lieferbar,
            rating: rating,
            art: buchArt,
        };
        setCriteria(suchkriterien);
    };

    return (
        <div className="shadow p-3 vh-100 d-flex flex-column">
            <button className="btn btn-primary" onClick={
                (e) => {
                    propagateSearch();
                }
            }>Save Filter</button>
            <br />
            <div className="mb-2">
                <h6 className="mb-1">Lieferbar?</h6>
                <div className="form-check">
                    <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="available" 
                    checked={lieferbar}
                    onChange={(e) => {
                        setLieferbar(e.target.checked);
                    }}
                    />
                    <label className="form-check-label" htmlFor="available">Ja</label>
                </div>
            </div>
            <div className="mb-2">
                <h6 className="mb-1">Rating</h6>
                {
                    [1, 2, 3, 4, 5].map((currentRating) => (
                        <div className="form-check" key={currentRating}>
                            <input
                                className="form-check-input"
                                type="radio"
                                id={`rating${rating}`}
                                checked={rating === currentRating}
                                onChange={(e) => {
                                    setRating(currentRating);
                                }}
                            />
                            <label className="form-check-label" htmlFor={`rating${currentRating}`}>{currentRating}</label>
                        </div>
                    ))
                }
            </div>
            <div>
                <h6 className="mb-1">Art</h6>
                <select
                    className="form-select form-select-sm"
                    id="art"
                    value={buchArt}
                    onChange={
                        (e) => {
                            setBuchArt(e.target.value as BuchArt);
                        }
                    }
                >
                    <option value={BuchArt.KINDLE}>Kindle</option>
                    <option value={BuchArt.DRUCKAUSGABE}>Druckausgabe</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;