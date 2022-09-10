const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    record: [Record]
  }

  type Game {
    _id: ID
    name: String
  }

  type Record {
    _id: ID
    recordDate: String
    games: [Game]
  }

  type Auth {
    token: ID
    user: User
 }

  type Query {
    game: [Game]
    user: User
    record: [Record]
  

  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addRecord(game: ID!): User
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(username: String!, password: String!): Auth
  }

`; 

module.exports = typeDefs;
