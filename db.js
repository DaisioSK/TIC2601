const {
  promisify,
} = require('util');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'TIC2601',
  password: 'TIC2601',
  database: 'TIC2601',
  port: 3306
});

//ALTER USER 'seakon'@'%' IDENTIFIED WITH mysql_native_password BY 'password'

connection.connect((err) => {
  if (err) throw err;
  console.log('DB TIC2601 Connected!');
});

module.exports = connection;

