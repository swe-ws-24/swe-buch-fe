const BookForm: React.FC = () => {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="isbn">ISBN</label>
                <input type="text" className="form-control" id="isbn" placeholder="ISBN eingeben" />
            </div>
            <div className="form-group">
                <label htmlFor="title">Titel</label>
                <input type="text" className="form-control" id="title" placeholder="Titel eingeben" />
            </div>
            <div className="form-group">
                <label htmlFor="subtitle">Untertitel</label>
                <input type="text" className="form-control" id="subtitle" placeholder="Untertitel eingeben" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Beschriftung</label>
                <textarea className="form-control" id="description" rows={3} placeholder="Beschriftung eingeben"></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="contentType">ContentType</label>
                <select className="form-control" id="contentType">
                    <option>Typ auswählen</option>
                    {/* Optionen für ContentType */}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="images">Abbildungen</label>
                <input type="file" className="form-control-file" id="images" multiple />
            </div>
        </form>
    );
}

export default BookForm;