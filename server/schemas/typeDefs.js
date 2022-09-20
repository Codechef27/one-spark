const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    records: [Record]
  }

  type Record {
    _id: ID
    gameTitle: String
    points: Int
    recordDate: String
  }

  type Auth {
    token: ID
    user: User
 }

  type Query {
    user: User
    profile: User
    records: [Record]
  users:[User]

  }

  input turnsInput {
    points: Int
    gameTitle: String
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    login(username: String!, password: String!): Auth
    addRecord(recordData: turnsInput): User
    deleteRecord(record: ID!): User
  }

`; 

module.exports = typeDefs;
