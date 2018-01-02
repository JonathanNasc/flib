var mysql = require('mysql');
var migration = require('mysql-migrations');
var dotenv = require('dotenv');

dotenv.config();

var conn = mysql.createPool(process.env.DB_URI);

migration.init(conn, __dirname + '/migrations');