// src/app/admin/adminPanel/page.tsx
import React from 'react';
import AdminUsername from '@/components/adminPanel/AdminUsername';
import ConfirmButton from '@/components/adminPanel/ConfirmButton';
import BookForm from '@/components/adminPanel/BookForm';
import HomeButton from '@/components/adminPanel/HomeButton';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminPanel: React.FC = () => {
    return (
        <main className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-sm" style={{ width: '90%', maxWidth: '1200px' }}>
                <div className="d-flex justify-content-between mb-3">
                    <HomeButton />
                    <AdminUsername username="AdminUser" />
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <BookForm />
                    </div>
                    <div className="col-md-4 d-flex flex-column justify-content-between">
                        <div className="api-response-placeholder mb-3 p-3 border rounded shadow-sm">
                            API-Response
                        </div>
                        <ConfirmButton />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AdminPanel;
