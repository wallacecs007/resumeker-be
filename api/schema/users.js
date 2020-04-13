const { gql } = require('apollo-server-express')

module.exports = gql`

    type User {
        id: ID!,
        userName: String!,
        email: String,
        userId: String,
        userImageURL: String!,
        firstName: String, 
        lastName: String, 
    },
    type Query{
        getUser(userId: String): User,
        allUsers:[User],
        hello(name: String!): Hello!
    },
    type Hello{
        message: String!
    },
    type Mutation{
        createUser(userName: String!, 
                    email: String!,
                    userId: String!,
                    userImageURL: String!,
                    firstName: String!,
                    lastName: String!
                ):User,
    }
`;