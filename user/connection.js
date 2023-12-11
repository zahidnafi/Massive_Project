const mysql = require('mysql2')

const connect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port:3306,
    database: "db-user"
})

connect.connect((err)=>{
    if (err)throw err    
})

module.exports = connect
