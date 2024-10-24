const multer = require("multer");
const path = require("path");
const PersonalDetails = require("../MODELS/PersonalDetails");
const VehicleDetails = require("../MODELS/VehicleDetails");
const BankDetails = require("../MODELS/BankDetails");
const ClientDetails = require("../MODELS/ClientDetails");

const uploadDirectories = {
  profilePicture: "Upload/driverProfile/",
  vehiclePicture: "Upload/vehicleImage/",
  PassBookPicture: "Upload/bankDocument/",
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = uploadDirectories[file.fieldname] || "Upload/other/";
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif|pdf|docx/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );

    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(
      new Error(
        "Error: File upload only supports the following filetypes - " +
          filetypes
      )
    );
  },
});

exports.addPersonalDetails = async (req, res) => {
  const uploadProfile = upload.single("profilePicture");
  uploadProfile(req, res, async function (err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    const {
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
    } = req.body;

    if (
      !driverType ||
      !serviceType ||
      !driverID ||
      !fullName ||
      !phoneNumber ||
      !gender ||
      !dob ||
      !addressLine1 ||
      !city ||
      !state ||
      !country ||
      !pinCode
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    try {
      const profilePhoto = req.file;
      const profilePictureUrl = profilePhoto ? profilePhoto.path : null;

      PersonalDetails.addPersonalDetails(
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
        (err, result) => {
          if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ error: "Failed to insert data" });
          }
          res.status(200).json({
            message: "Personal details added successfully",
            data: result,
          });
        }
      );
    } catch (error) {
      console.error("Server error:", error);
      return res.status(500).json({ error: "Server error" });
    }
  });
};

//controllers/vehicleDetails.js
exports.addVehicleDetails = async (req, res) => {
  const uploadVehicle = upload.single("vehiclePicture");
  uploadVehicle(req, res, async function (err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    const {
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
    } = req.body;

    if (
      !drivingExperience ||
      !rideType ||
      !vehicleRegNo ||
      !vehicleType ||
      !vehicleBrand ||
      !vehicleModel ||
      !vehicleColor ||
      !fuelType ||
      !manufactureYear ||
      !seatCapacity ||
      !mileageRange
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    try {
      const vehiclePhoto = req.file;
      const vehiclePictureUrl = vehiclePhoto ? vehiclePhoto.path : null;
      VehicleDetails.addVehicleDetails(
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
        vehiclePictureUrl,
        (err, result) => {
          if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ error: "Failed to insert data" });
          }
          res.status(200).json({
            message: "Vehicle details added successfully",
            data: result,
          });
        }
      );
    } catch (error) {
      console.error("Server error:", error);
      return res.status(500).json({ error: "Server error" });
    }
  });
};

//controller/ClientDetails.j
exports.addClientDetails = async (req, res) => {
  const { clientName, siteName, location, tripType } = req.body;

  if (!clientName || !siteName || !location || !tripType) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    ClientDetails.addClientDetails(
      clientName,
      siteName,
      location,
      tripType,
      (err, result) => {
        if (err) {
          console.error("Error inserting data:", err);
          return res
            .status(500)
            .json({ error: "Failed to insert client details" });
        }

        res.status(200).json({
          message: "Client details added successfully",
          data: result,
        });
      }
    );
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({ error: "Server error" });
  }
};

// controller/BankDetails.js
exports.addBankDetails = async (req, res) => {
  const uploadBankDocument = upload.single("PassBookPicture"); // Assuming you're uploading a document
  uploadBankDocument(req, res, async function (err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    const { accountHolderName, accountNumber, confirmAccountNumber, bankName } =
      req.body;

    // Validate if all required fields are provided
    if (
      !accountHolderName ||
      !accountNumber ||
      !confirmAccountNumber ||
      !bankName
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if accountNumber matches confirmAccountNumber
    if (accountNumber !== confirmAccountNumber) {
      return res.status(400).json({ error: "Account numbers do not match" });
    }

    try {
      const bankDocument = req.file; // Assuming a document upload
      const PassBookPicture = bankDocument ? bankDocument.path : null;

      BankDetails.addBankDetails(
        accountHolderName,
        accountNumber,
        confirmAccountNumber,
        bankName,
        PassBookPicture,
        (err, result) => {
          if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ error: "Failed to insert data" });
          }
          res.status(200).json({
            message: "Bank details added successfully",
            data: result,
          });
        }
      );
    } catch (error) {
      console.error("Error saving bank details:", error);
      return res.status(500).json({ error: "Failed to insert bank details" });
    }
  });
};

// controller/DocumentsDetails.js
// exports.addDocumentDetails = async (req, res) => {
//   const uploadDocuments = upload.single("documentFile"); // Assuming the document field for upload is named "documentFile"
//   uploadDocuments(req, res, async function (err) {
//     if (err instanceof multer.MulterError) {
//       return res.status(400).json({ error: err.message });
//     } else if (err) {
//       return res.status(400).json({ error: err.message });
//     }

//     const {
//       aadharNumber,
//       panNumber,
//       badgeIDNumber,
//       badgeStartDate,
//       badgeExpiryDate,
//       licenseNumber,
//       licenseStartDate,
//       licenseExpiryDate,
//       pvcNumber,
//       pvcStartDate,
//       pvcExpiryDate,
//       insurance_name_id,
//       insurance_start_date,
//       insurance_expiry_date,
//       rc_book_no,
//       rc_book_start_date,
//       rc_book_expiry_date,
//       fitness_certificate,
//       fitness_certificate_start_date,
//       fitness_certificate_expiry_date,
//       vehicle_registration_number,
//       engine_number,
//       chasis_number,
//     } = req.body;

//     if (
//       !aadharNumber ||
//       !panNumber ||
//       !badgeIDNumber ||
//       !badgeStartDate ||
//       !badgeExpiryDate ||
//       !licenseNumber ||
//       !licenseStartDate ||
//       !licenseExpiryDate ||
//       !pvcNumber ||
//       !pvcStartDate ||
//       !pvcExpiryDate ||
//       !insurance_name_id ||
//       !insurance_start_date ||
//       !insurance_expiry_date ||
//       !rc_book_no ||
//       !rc_book_start_date ||
//       !rc_book_expiry_date ||
//       !fitness_certificate ||
//       !fitness_certificate_start_date ||
//       !fitness_certificate_expiry_date ||
//       !vehicle_registration_number ||
//       !engine_number ||
//       !chasis_number
//     ) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     try {
//       const documentFile = req.file;
//       const documentFilePath = documentFile ? documentFile.path : null;

//       const sanitizedData = {
//         aadharNumber,
//         aadharDocument: documentFilePath,
//         panNumber,
//         panDocument: documentFilePath,
//         badgeIDNumber,
//         badgeStartDate,
//         badgeExpiryDate,
//         badgeIDDocument: documentFilePath,
//         licenseNumber,
//         licenseStartDate,
//         licenseExpiryDate,
//         licenseDocument: documentFilePath,
//         pvcNumber,
//         pvcStartDate,
//         pvcExpiryDate,
//         pvcDocument: documentFilePath,
//         insurance_name_id,
//         insurance_start_date,
//         insurance_expiry_date,
//         insurance_document: documentFilePath,
//         rc_book_no,
//         rc_book_start_date,
//         rc_book_expiry_date,
//         rc_book_document: documentFilePath,
//         fitness_certificate,
//         fitness_certificate_start_date,
//         fitness_certificate_expiry_date,
//         fitness_certificate_document: documentFilePath,
//         vehicle_registration_number,
//         vehicle_registration_document: documentFilePath,
//         engine_number,
//         engine_number_document: documentFilePath,
//         chasis_number,
//         chasis_number_document: documentFilePath,
//       };

//       DriverDocuments.create(sanitizedData, (err, result) => {
//         if (err) {
//           console.error("Error inserting data:", err);
//           return res.status(500).json({ error: "Failed to insert data" });
//         }
//         res.status(200).json({
//           message: "Document details added successfully",
//           data: result,
//         });
//       });
//     } catch (error) {
//       console.error("Server error:", error);
//       return res.status(500).json({ error: "Server error" });
//     }
//   });
// };

// // controller/VehicleDetailsController.js

// exports.addVehicleDetails = async (req, res) => {
//   try {
//     const sanitizedData = {
//       drivingExperience: req.body.drivingExperience,
//       rideType: req.body.rideType,
//       vehicleRegNo: req.body.vehicleRegNo,
//       vehicleType: req.body.vehicleType,
//       vehicleBrand: req.body.vehicleBrand,
//       vehicleModel: req.body.vehicleModel,
//       vehicleColor: req.body.vehicleColor,
//       fuelType: req.body.fuelType,
//       manufactureYear: req.body.manufactureYear,
//       seatCapacity: req.body.seatCapacity,
//       mileageRange: req.body.mileageRange,
//       vehiclePicture: req.file ? req.file.path : null, // Assuming vehicle picture is uploaded
//     };

//     const result = await VehicleDetails.create(sanitizedData);
//     res.status(201).json(result);
//   } catch (error) {
//     console.error('Error saving vehicle details:', error);
//     res.status(500).json({ error: 'An error occurred while saving vehicle details.' });
//   }
// };

// // Add Client Details
