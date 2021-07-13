import { gql } from '@apollo/client';

const getBooks = gql`
    query {
        books {
            id
            name
        }
    }
`;

const getBook = gql`
    query ($bookId: ID!) {
        book(id: $bookId) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    id
                    name
                }
            }
        }
    }
`;

export { getBooks, getBook };
