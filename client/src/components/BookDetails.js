import React from 'react';
import Card from 'react-bootstrap/Card';

import { useQuery } from '@apollo/client';
import { getBook } from '../graphql-client/queries';

const BookDetails = ({ bookId }) => {
    const { loading, error, data } = useQuery(getBook, {
        variables: {
            bookId,
        },
        skip: bookId === null,
    });
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    const book = data?.book;
    return (
        <Card bg="info" text="white" className="shadow">
            {book ? (
                <Card.Body>
                    <Card.Title>{book.name}</Card.Title>
                    <Card.Subtitle>{book.genre}</Card.Subtitle>
                    <p>{book.author.name}</p>
                    <p>Age: {book.author.age}</p>
                    <p>All books by this author</p>
                    <ul>
                        {book.author.books.map((book) => (
                            <li key={book.id}>{book.name}</li>
                        ))}
                    </ul>
                </Card.Body>
            ) : (
                <Card.Body>Please select a book</Card.Body>
            )}
        </Card>
    );
};

export default BookDetails;
