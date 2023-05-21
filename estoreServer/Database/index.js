const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "estore",
    port: 3306,
    multipleStatements: true
})

connection.connect(function (err, conn) {
    if (conn) {
        // conn.release();
        console.log('Connected to SQL');
    } else {
        console.log("found error",err);
    }

})

module.exports.connection = connection;
