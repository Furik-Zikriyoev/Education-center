const Pool = require('pg').Pool
const pool = new Pool({
    user: "Furik",
    password: "Mercury_2024",
    host: "localhost",
    port: 5432,
    database: "Edu_center"
})


module.exports = pool