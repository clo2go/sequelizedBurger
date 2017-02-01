var mysql = require("mysql");

var connection;


if (process.env.JAWSDB_URL) {
  connection = mysql.createConnectionc(process.env.JAWSDB_URL);
  connection.connect();
} else {
  connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "utbootcamp",
  database: "burgers_db"
});
};


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
