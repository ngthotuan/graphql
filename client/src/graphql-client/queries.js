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

const getAuthors = gql`
    query {
        authors {
            id
            name
        }
    }
`;

export { getBooks, getBook, getAuthors };
