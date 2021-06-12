const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
    }

    type Habit {
        _id: ID
        name: String
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        user: User
        habit(_id: ID!) : Habit
    }
`

module.exports = typeDefs;