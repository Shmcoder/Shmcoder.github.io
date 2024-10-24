// models/BankDetails.js
const db = require("../CONFIG/Config"); 


const addBankDetails = (
  accountHolderName,
  accountNumber,
  confirmAccountNumber,
  bankName,
  PassBookPicture,
  callback
) => {
  const query = `
    INSERT INTO bank_details 
    (accountHolderName, accountNumber, confirmAccountNumber, bankName, PassBookPicture) 
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [
      accountHolderName,
      accountNumber,
      confirmAccountNumber,
      bankName,
      PassBookPicture,
    ],
    (err, result) => {
      if (err) {
        return callback(err, null);
      }
      
      return callback(null, result);
    }
  );
};

module.exports = {
  addBankDetails,
};
