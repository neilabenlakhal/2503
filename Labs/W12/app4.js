var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "sqluser",
    password: "password",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers (name, address) VALUES ('HCT22', '2222')";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Customer created");
    });
});