const mysql = require("mysql2");
// require("dotenv").config();

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'shyamadmin@123#',
  database: 'driver_profile_details',
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database.");
});

module.exports = db;
