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
    turns: Int
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
  

  }

  input turnsInput {
    turns: Int
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    login(username: String!, password: String!): Auth
    addRecord(record: turnsInput): User
    deleteRecord(record: ID!): User
  }

`; 

module.exports = typeDefs;
