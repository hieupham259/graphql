const express = require('express')
const bodyParser = require('body-parser')
const { ApolloServer } = require('apollo-server-express')

// Load Schema and Resolver GraphQL
const typeDefs = require("./graphql/schema/schema")
const resolvers = require("./graphql/resolver/resolvers")

// Database Connection
const connectPostgres = require('./database/postgresql/connection')

const startServer = async () => {
    const port = process.env.PORT||4000  
    const app = express()
    app.use(bodyParser.json()) 

    // Init Apollo Server
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    })

    let postgresClient = await connectPostgres()
    await apolloServer.start()

    apolloServer.applyMiddleware({
        app,
        path: '/graphql'
    })

    // healthcheck route
    app.get("/", (req, res) => {
        res.json({message: `Welcome to the application at ${port}.`})
    })

    // healthcheck postgresql
    app.get("/postgres", async(req, res) => {
        query = "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'"
        const results = await postgresClient.query(query)
        return res.json({
            tables: results.rows,
            schema: 'default'
        })
    })

    app.listen(port, () =>
	    console.log(`Server listening on localhost:4000${apolloServer.graphqlPath}`)
    )
}   

startServer()
