import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query user {
    user {
      _id
      username
      email
      records {
        _id
        gameTitle
        points
        recordDate
      }
    }
  }

`;

export const QUERY_USERS = gql`
query users {
    users {
      _id
      username
      email
      records {
        _id
        gameTitle
        points
        recordDate
      }
    }
  }
`;