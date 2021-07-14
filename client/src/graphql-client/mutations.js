import { gql } from '@apollo/client';

const createBook = gql`
    mutation createBookMutation($authorId: ID!, $name: String, $genre: String) {
        createBook(authorId: $authorId, name: $name, genre: $genre) {
            name
            id
            genre
        }
    }
`;

const createAuthor = gql`
    mutation createAuthorMutation($name: String, $age: Int) {
        createAuthor(name: $name, age: $age) {
            id
            name
            age
        }
    }
`;

export { createBook, createAuthor };
