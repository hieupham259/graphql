// Load dummy data
const { shops, sellers } = require('../data/index')

const resolvers = {
    // root
    Query: {
        shops: () => shops,
        shop: (parent, args) => {
            let shop = shops.find(sp => sp.id.toString() === args.id)
            return shop
        },
        sellers: () => sellers,
        seller: (parent, args) => { 
            let seller = sellers.find(sl => sl.id.toString() === args.id)
            return seller
        }
    },
    Shop: {
        seller: (parent, args) => {
            return sellers.find(sl => sl.id === parent.seller)
        }
    },
    Seller: {
        shops: (parent, args) => {
            return [shops.find(sp => sp.seller === parent.id)]
        }
    }
}

module.exports = resolvers