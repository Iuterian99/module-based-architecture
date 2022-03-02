const { connection } = require('../config')
const { Pool } = require('pg')

const poolOutside = new Pool({
    connectionString: connection.connectionString
})

class PG {
    constructor() {
        this.pool = poolOutside
    }

    async fetch(SQL, ...params) {
        const client = await this.pool.connect()

        try {
            const { rows: [ row ] } = await client.query(SQL, params || null)
            return row
        } finally {
            client.release()
        }
    }

    async fetchAll(SQL, ...params) {
        const client = await this.pool.connect()

        try {
            const { rows } = await client.query(SQL, params || null)
            return rows
        } finally {
            client.release()
        }
    }
}

module.exports = PG