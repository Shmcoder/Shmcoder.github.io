// models/VehicleDetails.js
const db = require("../CONFIG/Config");


const addVehicleDetails = (
  drivingExperience,
  rideType,
  vehicleRegNo,
  vehicleType,
  vehicleBrand,
  vehicleModel,
  vehicleColor,
  fuelType,
  manufactureYear,
  seatCapacity,
  mileageRange,
  vehiclePicture,
  callback
) => {
  const query = `
    INSERT INTO vehicle_details 
    (drivingExperience, rideType, vehicleRegNo, vehicleType, 
    vehicleBrand, vehicleModel, vehicleColor, fuelType, 
    manufactureYear, seatCapacity, mileageRange, vehiclePicture) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [
      drivingExperience,
      rideType,
      vehicleRegNo,
      vehicleType,
      vehicleBrand,
      vehicleModel,
      vehicleColor,
      fuelType,
      manufactureYear,
      seatCapacity,
      mileageRange,
      vehiclePicture,
    ],
    (err, result) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, result);
    }
  );
};

// Export the function
module.exports = {
  addVehicleDetails,
};
