// validation.js
const Joi = require('joi');

const addPersonalDetailsSchema = Joi.object({
  driverType: Joi.string().required(),
  serviceType: Joi.string().required(),
  driverID: Joi.string().required(),
  fullName: Joi.string().required(),
  phoneNumber: Joi.string().required(),
  gender: Joi.string().valid('Male', 'Female', 'Other').required(),
  dob: Joi.date().required(),
  addressLine1: Joi.string().required(),
  addressLine2: Joi.string().allow(null, ''),
  city: Joi.string().required(),
  state: Joi.string().required(),
  country: Joi.string().required(),
  pinCode: Joi.string().required(),
  profilePictureUrl: Joi.string().uri().allow(null, ''),
});

const addVehicleDetailsSchema = Joi.object({
  drivingExperience: Joi.string().required(),
  rideType: Joi.string().required(),
  vehicleRegNo: Joi.string().required(),
  vehicleType: Joi.string().required(),
  vehicleBrand: Joi.string().required(),
  vehicleModel: Joi.string().required(),
  vehicleColor: Joi.string().required(),
  fuelType: Joi.string().required(),
  manufactureYear: Joi.string().required(),
  seatCapacity: Joi.string().required(),
  mileageRange: Joi.string().required(),
  vehiclePicture: Joi.any(), 
});

const addBankDetailsSchema = Joi.object({
  accountHolderName: Joi.string().required(),
  accountNumber: Joi.string().required(),
  confirmAccountNumber: Joi.string().valid(Joi.ref('accountNumber')).required().messages({
    'any.only': 'Account numbers must match',
  }),
  bankName: Joi.string().required(),
  PassBookPicture: Joi.string().uri().allow(null, ''),
});

const addClientDetailsSchema = Joi.object({
  clientName: Joi.string().required(),
  siteName: Joi.string().required(),
  location: Joi.string().required(),
  tripType: Joi.string().required(),
});

const addDocumentDetailsSchema = Joi.object({

  aadharNumber: Joi.string().required(),
  aadharDocument: Joi.string().required(),
  panNumber: Joi.string().required(),
  panDocument: Joi.string().required(),
  badgeIDNumber: Joi.string().required(),
  badgeStartDate: Joi.date().required(),
  badgeExpiryDate: Joi.date().required(),
  badgeIDDocument: Joi.string().required(),
  licenseNumber: Joi.string().required(),
  licenseStartDate: Joi.date().required(),
  licenseExpiryDate: Joi.date().required(),
  licenseDocument: Joi.string().required(),
  pvcNumber: Joi.string().required(),
  pvcStartDate: Joi.date().required(),
  pvcExpiryDate: Joi.date().required(),
  pvcDocument: Joi.string().required(),
  insurance_name_id: Joi.string().required(),
  insurance_start_date: Joi.date().required(),
  insurance_expiry_date: Joi.date().required(),
  insurance_document: Joi.string().required(),
  rc_book_no: Joi.string().required(),
  rc_book_start_date: Joi.date().required(),
  rc_book_expiry_date: Joi.date().required(),
  rc_book_document: Joi.string().required(),
  fitness_certificate: Joi.string().required(),
  fitness_certificate_start_date: Joi.date().required(),
  fitness_certificate_expiry_date: Joi.date().required(),
  fitness_certificate_document: Joi.string().required(),
  vehicle_registration_number: Joi.string().required(),
  vehicle_registration_document: Joi.string().required(),
  engine_number: Joi.string().required(),
  engine_number_document: Joi.string().required(),
  chasis_number: Joi.string().required(),
  chasis_number_document: Joi.string().required(),
});

module.exports = {
  addPersonalDetailsSchema,
  addVehicleDetailsSchema,
  addBankDetailsSchema,
  addClientDetailsSchema,
  // addDocumentDetailsSchema,
};
