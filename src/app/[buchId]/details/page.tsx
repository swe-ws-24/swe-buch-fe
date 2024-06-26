// src/app/details/page.tsx
import React from 'react';
import HomeButton from '@/components/adminPanel/HomeButton';
import BookDetails from '@/components/details/BookDetails';

const BuchDetails = ({ params }: { params: { buchId: string } }) => {
    return (
        <main className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-sm" style={{ width: '90%', maxWidth: '1200px' }}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                        <HomeButton />
                    </div>
                </div>
                <BookDetails buchId={params.buchId} />
            </div>
        </main>
    );
};

export default BuchDetails;