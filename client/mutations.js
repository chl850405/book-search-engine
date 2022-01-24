import gql from 'graphql-tag';

//login user mutation
export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

//add user mutation
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!){
        addUser(username: $username, email: $email, password: $password){
            token
            user{
                _id
                username
            }
        }
    }
`;

//save book mutation
export const SAVE_BOOK = gql`
    mutation saveBook($authors: [String], $description: String, $title: String, $bookId: String, $image: String, $link: String){
        saveBook(authors: $authors, description: $description, title: $title, bookId: $bookId, image: $image, link: $link){
            _id
            username
            savedBooks{
                authors
                description
                title
                bookId
                image
                link
            }
        }
    }
`;

//remove book mutation
export const REMOVE_BOOK = gql`
    mutation removeBook($bookId:String!){
        removeBook(bookId: $bookId){
            username
            savedBooks{
                authors
                description
                title
                bookId
                image
                link
            }
        }
    }
`;