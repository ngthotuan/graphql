import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BookDetails from './BookDetails';

import { useQuery } from '@apollo/client';
import { getBooks } from '../graphql-client/queries';

const BookList = () => {
    const [bookSelected, setBookSelected] = useState(null);
    const { loading, error, data } = useQuery(getBooks);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
        <Row>
            <Col xs={8} className="row">
                {data.books.map((book) => (
                    <div
                        className="col-sm-6 col-md-4 d-flex my-2"
                        key={book.id}
                        onClick={() => setBookSelected(book.id)}
                    >
                        <Card
                            border="info"
                            text="info"
                            className="flex-fill text-center shadow"
                        >
                            <Card.Body>{book.name}</Card.Body>
                        </Card>
                    </div>
                ))}
            </Col>
            <Col>
                <BookDetails bookId={bookSelected} />
            </Col>
        </Row>
    );
};

export default BookList;
