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
`

module.exports = typeDefs;