const express = require('express')
const bodyParser = require('body-parser')
const {ApolloServer} = require('apollo-server-express')

// Load Schema and Resolver GraphQL
const typeDefs = require("./graphql/schema/schema")
const resolvers = require("./graphql/resolver/resolvers")

const startServer = async () => {
    const port = process.env.PORT||4000  
    const app = express()
    app.use(bodyParser.json()) 

    // Init Apollo Server
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    })

    await apolloServer.start()

    apolloServer.applyMiddleware({
        app,
        path: '/graphql'
    })

    // healthcheck route
    app.get("/", (req, res) => {
        res.json({message: `Welcome to the application at ${port}.`})
    })

    app.listen(port, () =>
	    console.log(`Server listening on localhost:4000${apolloServer.graphqlPath}`)
    )
}   

startServer()

