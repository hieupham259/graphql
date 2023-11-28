const { Client } = require('pg')


const connectPostgres = async () => {
    try {
        const client = new Client({
            user: 'postgres',
            host: 'postgres',
            database: 'test',
            password: 'postgres',
            port: 5432
        })
        await client.connect(function(err) {
            if (err) throw err;
            console.log("PostgreSQL Connection Successfully!!!")
        })
        return client
    } catch (err) {
		console.log(error.message)
		process.exit(1)
    }   
}

module.exports = connectPostgres 



