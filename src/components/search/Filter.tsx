// src/components/search/Filter.tsx
import React from 'react';

const Filter: React.FC = () => {
    return (
        <div className="border p-2">
            <div className="mb-2">
                <h6 className="mb-1">Lieferbar?</h6>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="available" id="availableYes" />
                    <label className="form-check-label" htmlFor="availableYes">Ja</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="available" id="availableNo" />
                    <label className="form-check-label" htmlFor="availableNo">Nein</label>
                </div>
            </div>
            <div className="mb-2">
                <h6 className="mb-1">Rating</h6>
                {[1, 2, 3, 4, 5].map((rating) => (
                    <div className="form-check" key={rating}>
                        <input className="form-check-input" type="checkbox" id={`rating${rating}`} />
                        <label className="form-check-label" htmlFor={`rating${rating}`}>{rating}</label>
                    </div>
                ))}
            </div>
            <div>
                <h6 className="mb-1">Art</h6>
                <select className="form-select form-select-sm" id="art">
                    <option value="Kindle">Kindle</option>
                    <option value="Buchdruck">Buchdruck</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;