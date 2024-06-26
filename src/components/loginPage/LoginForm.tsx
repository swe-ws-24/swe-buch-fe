'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import { login } from '@graphql/queries'

const LoginForm: React.FC = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');
        const response = await login(email, password);
        if (!response.loggedIn) {
            setError('Login fehlgeschlagen. Bitte überprüfe deine Eingaben.');
            response.errors.forEach(err => setError(prev => prev + " " + err));
        } else {
            console.log('Erfolgreich eingeloggt!');
            router.push('/admin/adminPanel');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <small id="emailHelp" className="form-text text-muted">
                    We&apos;ll never share your email with anyone else.
                </small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default LoginForm;
