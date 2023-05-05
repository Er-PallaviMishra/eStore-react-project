const mysql = require('mysql');

const connection = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"Password@123",
    database:"eStore",
    port:3306,
    // multipleStatements:true
})

module.exports.connection = connection;
