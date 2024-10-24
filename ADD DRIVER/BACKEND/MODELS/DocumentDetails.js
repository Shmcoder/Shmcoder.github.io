// MODELS/DriverDocuments.js

const db = require("../CONFIG/Config"); 


const addDocumentDetails = (
  aadharNumber,
  aadharDocument,
  panNumber,
  panDocument,
  badgeIDNumber,
  badgeStartDate,
  badgeExpiryDate,
  badgeIDDocument,
  licenseNumber,
  licenseStartDate,
  licenseExpiryDate,
  licenseDocument,
  pvcNumber,
  pvcStartDate,
  pvcExpiryDate,
  pvcDocument,
  insurance_name_id,
  insurance_start_date,
  insurance_expiry_date,
  insurance_document,
  rc_book_no,
  rc_book_start_date,
  rc_book_expiry_date,
  rc_book_document,
  fitness_certificate,
  fitness_certificate_start_date,
  fitness_certificate_expiry_date,
  fitness_certificate_document,
  vehicle_registration_number,
  vehicle_registration_document,
  engine_number,
  engine_number_document,
  chasis_number,
  chasis_number_document,
  callback
) => {
  const query = `INSERT INTO document_details 
  (aadharNumber, aadharDocument, panNumber, panDocument, badgeIDNumber, badgeStartDate, badgeExpiryDate, badgeIDDocument, licenseNumber, licenseStartDate, licenseExpiryDate, licenseDocument, pvcNumber, pvcStartDate, pvcExpiryDate, pvcDocument, insurance_name_id, insurance_start_date, insurance_expiry_date, insurance_document, rc_book_no, rc_book_start_date, rc_book_expiry_date, rc_book_document, fitness_certificate, fitness_certificate_start_date, fitness_certificate_expiry_date, fitness_certificate_document, vehicle_registration_number, vehicle_registration_document, engine_number, engine_number_document, chasis_number, chasis_number_document) 
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(
    query,
    [
      aadharNumber,
      aadharDocument,
      panNumber,
      panDocument,
      badgeIDNumber,
      badgeStartDate,
      badgeExpiryDate,
      badgeIDDocument,
      licenseNumber,
      licenseStartDate,
      licenseExpiryDate,
      licenseDocument,
      pvcNumber,
      pvcStartDate,
      pvcExpiryDate,
      pvcDocument,
      insurance_name_id,
      insurance_start_date,
      insurance_expiry_date,
      insurance_document,
      rc_book_no,
      rc_book_start_date,
      rc_book_expiry_date,
      rc_book_document,
      fitness_certificate,
      fitness_certificate_start_date,
      fitness_certificate_expiry_date,
      fitness_certificate_document,
      vehicle_registration_number,
      vehicle_registration_document,
      engine_number,
      engine_number_document,
      chasis_number,
      chasis_number_document,
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
  addDocumentDetails, 
};
