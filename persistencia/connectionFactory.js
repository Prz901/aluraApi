let mysql = require("mysql");

function createConnection() {
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "payfast"
  });
}
module.exports = function() {
  return createConnection;
};
