const Sidebar = () => {
            return (
                <div className="p-3 shadow vh-100 d-flex flex-column">
                    <div className="mb-3">
                        <label>Lieferbar?</label>
                        <div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="lieferbar" id="lieferbarJa" />
                                <label className="form-check-label" htmlFor="lieferbarJa">
                                    Ja
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="lieferbar" id="lieferbarNein" />
                                <label className="form-check-label" htmlFor="lieferbarNein">
                                    Nein
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label>Rating</label>
                        <div>
                            {[1, 2, 3, 4, 5].map(rating => (
                                <div className="form-check" key={rating}>
                                    <input className="form-check-input" type="checkbox" id={`rating${rating}`} value={rating} />
                                    <label className="form-check-label" htmlFor={`rating${rating}`}>
                                        {rating}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-3">
                        <label>Art</label>
                        <div className="input-group">
                            <select className="form-select" id="artSelect">
                                <option value="Druckausgabe">Druckausgabe</option>
                                <option value="Kindle">Kindle</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-auto">
                        <div>User:</div>
                    </div>
                </div>
            );
        
    }

export default Sidebar;
