// Database Connection
const connectPostgres = require('./connection')

const postgresMethods = async () => {
    let client = await connectPostgres()

    let allSellers = await client.query("SELECT * FROM sellers")
    let allShops = await client.query("SELECT * FROM shops")

    let methods = {
        getAllTables: async () => {
            query = "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'"
            const results = await client.query(query)
            return {
                tables: results.rows,
                schema: 'default'
            }
	    },
        getAllSellers: async () => {
            return allSellers.rows
        },
        getSellerById: async (id) => {
            let seller = await client.query(`SELECT * FROM sellers WHERE id = ${id}`)
            return seller.rows
        },
        getAllShops: async () => {
            return allShops.rows
        },
        getShopById: async (id) => {
            let shop = await client.query(`SELECT * FROM shops WHERE id = ${id}`)
            return shop.rows
        }
    }
    return methods
}

// const postgresMethods = {
//     getAllTables: async () => {
//         let client = await connectPostgres()
// 		query = "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'"
//         const results = await client.query(query)
//         return {
//             tables: results.rows,
//             schema: 'default'
//         }
// 	},
//     getAllSellers: async () => {
//         let client = await connectPostgres()
// 		query = "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'"
//         const results = await client.query(query)
//         return {
//             tables: results.rows,
//             schema: 'default'
//         }
//     }
// }

module.exports = postgresMethods