const { gql } = require("apollo-server");

const role = gql`
    # Role is the Job the user is applying for
    type Query {
        getRole(userId: ID!): Role!
    }
    type Mutation {
        addRole(id: ID!): Role!
        updateRole(id: ID!): Role!
    }
    type Role {
        id: ID!
        userId: ID!
        name: String
    }
    input RoleInput {
        userId: ID!
        name: String
    }
`;

module.exports = role;
