import { gql } from '@apollo/client';

export const QUERY_USER = gql`
 {
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
 {
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