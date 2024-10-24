// MODELS/PersonalDetails.js

const db = require('../CONFIG/Config'); 


const addPersonalDetails = (
  driverType,
  serviceType,
  driverID,
  fullName,
  phoneNumber,
  gender,
  dob,
  addressLine1,
  addressLine2,
  city,
  state,
  country,
  pinCode,
  profilePictureUrl,
  callback
) => {
  const query = `INSERT INTO personal_details 
  (driverType, serviceType, driverID, fullName, phoneNumber, gender, dob, addressLine1, addressLine2, city, state, country, pinCode, profilePictureUrl) 
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(
    query,
    [
      driverType,
      serviceType,
      driverID,
      fullName,
      phoneNumber,
      gender,
      dob,
      addressLine1,
      addressLine2,
      city,
      state,
      country,
      pinCode,
      profilePictureUrl,
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
  addPersonalDetails, // Export the function
};
