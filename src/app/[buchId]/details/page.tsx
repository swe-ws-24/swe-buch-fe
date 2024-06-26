// src/app/details/page.tsx
import React from 'react';
import HomeButton from '@/components/adminPanel/HomeButton';
import BookDetails from '@/components/details/BookDetails';

const Page = () => {
    // Beispielhafte Daten. In der Anwendung durch einen API-Aufruf ersetzen.
    const bookData = {
        title: 'Beispieltitel',
        subtitle: 'Beispieluntertitel',
        art: 'DRUCKAUSGABE' as 'DRUCKAUSGABE' | 'KINDLE',
        date: '2024-06-22',
        rating: 4.5,
        homepage: 'https://beispiel.de',
        keywords: ['Beispiel', 'Buch'],
        price: 19.99,
        discount: 19,
        isbn: '978-3-16-148410-0',
        available: true,
        imageUrl: 'https://via.placeholder.com/150',
    };

    return (
        <main className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-sm" style={{ width: '90%', maxWidth: '1200px' }}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                        <HomeButton />
                    </div>
                </div>
                <BookDetails {...bookData} />
            </div>
        </main>
    );
};

export default Page;