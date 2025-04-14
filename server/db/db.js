const mysql = require('mysql2')

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'kalpesh##200220',
    database:'hackathon_db'
})

module.exports = pool