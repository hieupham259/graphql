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
		shop: async (parent, { id }, { postgresMethods }) =>
			await postgresMethods.getShopById(id),

		sellers: async (parent, args, { methods }) =>
			await methods.getAllSellers(),
		seller: async (parent, { id }, { postgresMethods }) =>
			await postgresMethods.getSellerById(id)
	},
}

module.exports = resolvers