import React from 'react';

const Anlegebutton = () => {
          return (
            <div className="container mt-3">
            <form className="d-flex align-items-center">
              <div className="d-flex align-items-center me-2">
                <label htmlFor="newBook" className="form-label mb-0">
                  Neues Buch anlegen:
                </label>
              </div>
              <button type="submit" className="btn btn-primary ms-2">
                Go
              </button>
            </form>
          </div>
        );
}

export default Anlegebutton;