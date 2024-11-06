// Query.js
const db = require("../CONFIG/DataBase_Connection");

const insertData = (table, data, res) => {
  const fields = Object.keys(data).join(", ");
  const placeholders = Object.keys(data)
    .map(() => "?")
    .join(", ");
  const values = Object.values(data);
  const query = `INSERT INTO ${table} (${fields}) VALUES (${placeholders})`;

  db.query(query, values, (err, result) => {
    if (err) {
      console.error(`Error adding ${table} data:`, err);
      return res.status(500).json({ message: `Error adding ${table} data` });
    }
    res.status(201).json({
      message: `${table} data added successfully`,
      id: result.insertId,
    });
  });
};

exports.addPersonalDetailsQuery = (data, res) =>insertData("personal_details", data, res);
exports.addVehicleDetailsQuery = (data, res) =>insertData("vehicle_details", data, res);
exports.addBankDetailsQuery = (data, res) => insertData("bank_details", data, res);
exports.addClientDetailsQuery = (data, res) =>insertData("client_details", data, res);


// exports.addDocumentDetailsQuery = (data, res) =>
//   insertData("document_details", data, res);
