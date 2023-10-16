const { gql } = require('apollo-server-express')

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Shop {
    id: ID!
    name: String
    category: String
    seller: Seller
  }

  type Seller {
    id: ID!
    name: String
    address: String
    shops: [Shop]
  }

  type Query {
    shops: [Shop]
    shop(id: ID!): Shop
    sellers: [Seller]
    seller(id: ID!): Seller
  }

`

module.exports = typeDefs