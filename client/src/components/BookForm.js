import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useQuery, useMutation } from '@apollo/client';
import { getAuthors, getBooks } from '../graphql-client/queries';
import { createBook } from '../graphql-client/mutations';

const BookForm = () => {
    const { loading, error, data } = useQuery(getAuthors);
    const [addBook, dataMutation] = useMutation(createBook);
    // console.log(dataMutation);

    const [newBook, setNewBook] = useState({
        name: '',
        genre: '',
        authorId: '',
    });
    const onInputChange = (event) => {
        setNewBook({
            ...newBook,
            [event.target.name]: event.target.value,
        });
    };
    const onSubmit = (event) => {
        event.preventDefault();
        let valid = true;
        for (let key in newBook) {
            if (!newBook[key]) {
                alert('Please input ' + key);
                valid = false;
                break;
            }
        }
        if (valid) {
            addBook({
                variables: newBook,
                refetchQueries: [{ query: getBooks }],
            });
            setNewBook({ name: '', genre: '', authorId: '' });
        }
    };
    return (
        <Form onSubmit={onSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    name="name"
                    value={newBook.name}
                    onChange={onInputChange}
                    placeholder="Book name"
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    name="genre"
                    value={newBook.genre}
                    onChange={onInputChange}
                    placeholder="Book genre"
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="select"
                    name="authorId"
                    value={newBook.authorId}
                    onChange={onInputChange}
                >
                    <option disabled value="">
                        Select author
                    </option>
                    {loading ? (
                        <option disabled>Loading... </option>
                    ) : (
                        data?.authors.map((author) => (
                            <option key={author.id} value={author.id}>
                                {author.name}
                            </option>
                        ))
                    )}
                </Form.Control>
            </Form.Group>
            <Button className="float-right" variant="info" type="submit">
                Add Book
            </Button>
        </Form>
    );
};

export default BookForm;
