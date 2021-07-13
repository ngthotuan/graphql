import { gql } from '@apollo/client';

const createBook = gql`
    mutation CreateBookMutation($authorId: ID!, $name: String, $genre: String) {
        createBook(authorId: $authorId, name: $name, genre: $genre) {
            name
            id
            genre
        }
    }
`;

export { createBook };
