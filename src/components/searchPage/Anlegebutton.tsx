import Link from 'next/link';
import React from 'react';

const Anlegebutton = () => {
          return (
            <div className="container mt-3">
            <form className="d-flex align-items-center">
              <Link href="/admin/adminPanel" type="submit" className="btn btn-primary ms-2">
                + Hinzufügen
              </Link>
            </form>
          </div>
        );
}

export default Anlegebutton;