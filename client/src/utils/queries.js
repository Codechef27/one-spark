import { gql } from '@apollo/client';

export const QUERY_USER = gql`

{
    user {
        _id
        username
        email
        records {
            _id
           recordDate
           game {} 
        }
    }
}`