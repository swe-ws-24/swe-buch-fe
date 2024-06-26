'use client';
// src/app/admin/adminPanel/page.tsx
import React from 'react';
import BookForm from '@/components/adminPanel/BookForm';
import HomeButton from '@/components/adminPanel/HomeButton';
import AdminUsername from '@/components/adminPanel/AdminUsername';

const AdminPanel: React.FC = () => {
    return (
        <main className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-sm" style={{ width: '90%', maxWidth: '1200px' }}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <HomeButton />
                    <div className="ms-auto">
                        <AdminUsername username="Username" />
                    </div>
                </div>
                <BookForm />
            </div>
        </main>
    );
};

export default AdminPanel;