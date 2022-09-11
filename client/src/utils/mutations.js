import { gql } from '@apollo/client';


export const LOGIN_USER = gql`

  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
        token
        user {
            _id
            username
        }
    }
  }
`;


export const ADD_USER = gql` 

mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// export const ADD_RECORD = gql`
//   mutation addRecord($record: record!) {
//     addRecord(record: $record!) {
//       username
//       email
//       record {
//         _id
//         recordDate
//         game
//       }
//     }
//   }
// `;

// export const DELETE_RECORD = gql`
//   mutation deleteRecord($record: record!) {
//     addRecord(record: $record!) {
//       username
//       email
//       record {
//         _id
//         recordDate
//         game
//       }
//     }
//   }
// `;

