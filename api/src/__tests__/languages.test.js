// const { ApolloServer, gql, AuthenticationError } = require("apollo-server");
// const { createTestClient } = require("apollo-server-testing");

const resolvers = require("../graphql/resolvers/languages");
const typeDefs = require("../graphql/schema/languages");

// const throwAuthError = () => {
//     throw new AuthenticationError(
//         "You must be authenticated or authorized to perform this operation."
//     );
// };

// it("testClient query", async () => {
//     // create a test server to test against, using our production typeDefs,
//     // resolvers, and dataSources.
//     const server = new ApolloServer({
//         typeDefs,
//         resolvers,
//         context: () => ({
//             decoded: { sub: "random string" },
//             throwAuthError,
//         }),
//     });

//     // use the test server to create a query function
//     const { query } = createTestClient(server);

    // run query against the server and snapshot the output
    const res = await query({
        query: gql`
            query getLanguage {
                getLanguage(languageID: 118) {
                    language
                }
            }
        `,
        variables: { languageID: 118 },
    });
    expect(res.data).toBe(null);
});

