const express = require('express')
const bodyParser = require('body-parser')
const { ApolloServer } = require('apollo-server-express')

// Load Schema and Resolver GraphQL
const typeDefs = require("./graphql/schema/schema")
const resolvers = require("./graphql/resolver/resolvers")

// Database Connection
const connectPostgres = require('./database/postgresql/connection')

// Database Query Method
// const postgresMethods = require('./database/postgresql/queryMethod')

const startServer = async () => {
    const port = process.env.PORT||4002
    const app = express()
    app.use(bodyParser.json()) 
    
    // let methods = await postgresMethods()

    // Init Apollo Server
    // const apolloServer = new ApolloServer({
    //     typeDefs,
    //     resolvers,
    //     context: () => ({ methods })

    // })
    // await apolloServer.start()
    // apolloServer.applyMiddleware({
    //     app,
    //     path: '/graphql'
    // })

    // healthcheck route
    app.get("/", (req, res) => {
        res.json({message: `Welcome to the application at ${port}.`})
    })

    // healthcheck postgresql
    app.get("/postgres", async(req, res) => {
        let response = await methods.getAllSellers()
        return res.json(response)
    })

    app.listen(port, () =>
	    console.log(`Server listening on localhost:${port}`)
    )
}   

startServer()
