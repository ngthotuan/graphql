import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useQuery, useMutation } from '@apollo/client';
import { getAuthors } from '../graphql-client/queries';
import { createAuthor } from '../graphql-client/mutations';

const AuthorForm = () => {
    const { loading, error, data } = useQuery(getAuthors);
    const [addAuthor, dataMutation] = useMutation(createAuthor);
    // console.log(dataMutation);

    const [newAuthor, setNewAuthor] = useState({
        name: '',
        age: '',
    });
    const onInputChange = (event) => {
        setNewAuthor({
            ...newAuthor,
            [event.target.name]: event.target.value,
        });
    };
    const onSubmit = (event) => {
        event.preventDefault();
        let valid = true;
        for (let key in newAuthor) {
            if (!newAuthor[key]) {
                alert('Please input ' + key);
                valid = false;
                break;
            }
        }
        if (valid) {
            addAuthor({
                variables: {
                    name: newAuthor.name,
                    age: +newAuthor.age,
                },
                refetchQueries: [{ query: getAuthors }],
            });
            setNewAuthor({ name: '', age: '' });
        }
    };
    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className="invisible">
                <Form.Control />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    name="name"
                    placeholder="Author name"
                    value={newAuthor.name}
                    onChange={onInputChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="number"
                    name="age"
                    placeholder="Author age"
                    value={newAuthor.age}
                    onChange={onInputChange}
                />
            </Form.Group>
            <Button className="float-right" variant="info" type="submit">
                Add Author
            </Button>
        </Form>
    );
};

export default AuthorForm;
