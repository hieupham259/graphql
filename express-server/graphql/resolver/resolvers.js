// Load dummy data
const { shops, sellers } = require('../data/index')

// const resolvers = {
//     Query: {
//         shops: () => shops,
//         shop: (parent, args) => {
//             let shop = shops.find(sp => sp.id.toString() === args.id)
//             return shop
//         },
//         sellers: () => sellers,
//         seller: (parent, args) => { 
//             let seller = sellers.find(sl => sl.id.toString() === args.id)
//             return seller
//         }
//     },
//     Shop: {
//         seller: (parent, args) => {
//             console.log({parent})
//             return sellers.find(sl => sl.id === parent.seller)
//         }
//     },
//     Seller: {
//         shops: (parent, args) => {
//             return [shops.find(sp => sp.seller === parent.id)]
//         }
//     }
// }


// with context database method 
const resolvers = {
	// QUERY
	Query: {
		shops: async (parent, args, { methods }) =>
			await methods.getAllShops(),
		shop: async (parent, { id }, { methods }) =>{
			return await methods.getShopById(parseInt(id))
        },
		sellers: async (parent, args, { methods }) =>
			await methods.getAllSellers(),
		seller: async (parent, { id }, { methods }) => {
	    	return await methods.getSellerById(parseInt(id))
        }
	},
    Shop: {
        seller: async (parent, args, { methods }) => {
            return await methods.getSellerByShop(parent.id)
        }
    },
    Seller: {
        shops: async (parent, args, { methods }) => {
            return await methods.getShopBySeller(parent.id)
        }
    }
}

module.exports = resolvers