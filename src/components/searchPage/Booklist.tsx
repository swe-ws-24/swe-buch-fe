"use client"

import React, { useState } from 'react'; 

const Booklist = () => {

    function truncate(text: string, maxLength: number) {
        return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    }

    // Initialisieren des Zustands mit einer Beispielliste von Büchern
    const [books, setBooks] = useState([
        { id: 1, title: 'Buchtitel', subtitle: 'Untertitel', isbn: '123456789', rating: '5', price: '20€' },
        { id: 2, title: 'Buchtitel 2', subtitle: 'Untertitel 2', isbn: '987654321', rating: '4', price: '25€' },
        { id: 2, title: 'Moderne Architektur', subtitle: 'Baukunst', isbn: '234567891', rating: '4', price: '35€' },
        { id: 3, title: 'Geschichte der Kunst', subtitle: 'Von Antike bis Moderne', isbn: '345678912', rating: '3', price: '40€' },
        { id: 4, title: 'Einführung in die Programmierung', subtitle: 'Grundlagen in Java', isbn: '456789123', rating: '5', price: '30€' },
        { id: 5, title: 'Welt der Wissenschaft', subtitle: 'Physik im Alltag', isbn: '567891234', rating: '4', price: '25€' },
        { id: 6, title: 'Kulinarische Reise', subtitle: 'Entdecken Sie die Welt', isbn: '678912345', rating: '5', price: '22€' }
    ]);
    
    const maxLength = 45;

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Buch</th>
                        <th>Details</th>
                        <th>Edit</th>
                        <th>Del</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td className='p-3'>{truncate(`${book.title}, ${book.subtitle}, ${book.price}, ${book.rating}, ${book.isbn}`, maxLength)}</td>
                            <td><button className="btn btn-primary">Details</button></td>
                            <td><button className="btn btn-success">Edit</button></td>
                            <td><button className="btn btn-danger">Del</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );   
}

export default Booklist;
