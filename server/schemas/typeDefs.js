const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    records: [Record]
  }

  type Game {
    _id: ID
    name: String
  }

  type Record {
    score: Int
    recordId: ID
    recordDate: String
    game: [Game]
  }

  type Auth {
    token: ID
    user: User
 }

  type Query {
    game: [Game]
    user: User
    profile: User
    record: [Record]
  

  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    login(username: String!, password: String!): Auth
    addRecord(game: ID!): User
    deleteRecord(recordId: ID!): User
  }

`; 

module.exports = typeDefs;
