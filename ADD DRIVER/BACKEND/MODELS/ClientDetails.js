// models/ClientDetails.js
const db = require("../CONFIG/Config");

const addClientDetails = (
  clientName,
  siteName,
  location,
  tripType,
  callback
) => {
  const query = `
    INSERT INTO client_details (clientName, siteName, location, tripType) 
    VALUES (?, ?, ?, ?)
  `;

  
  db.query(query, [clientName, siteName, location, tripType], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

module.exports = {
  addClientDetails,
};
