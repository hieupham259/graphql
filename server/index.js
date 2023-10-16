const {ApolloServer} = require('apollo-server')


// Load Schema and Resolver
const typeDefs = require("./schema/schemas")
const resolvers = require("./resolver/resolvers")

// Implement GraphQL Server
const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(() => {
    console.log(`
      GraphQL Server is running!
      Listening on port 4000
    `);
});