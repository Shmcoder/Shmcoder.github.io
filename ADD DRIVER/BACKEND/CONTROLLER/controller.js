// Controller.js
const multer = require("multer");
const path = require("path");
// const { addPersonalDetailsQuery, addVehicleDetails, addBankDetails, addClientDetails, addDocumentDetails } = require("../QUERY/Query");
const {
  addPersonalDetailsSchema,
  addVehicleDetailsSchema,
  addBankDetailsSchema,
  addClientDetailsSchema,
} = require("../VALIDATION/validationSchemas");

const {
  addPersonalDetailsQuery,
  addVehicleDetailsQuery,
  addBankDetailsQuery,
  addClientDetailsQuery,
} = require("../QUERY_HANDLER/Query");
// const {validate} = require("../VALIDATION/Validate");

// Define storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDirs = {
      profilePicture: "Upload/driverProfile/",
      vehiclePicture: "Upload/vehicleImage/",
      PassBookPicture: "Upload/bankDocument/",
    };
    const folder = uploadDirs[file.fieldname] || "Upload/other/";
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage });

// Helper to run validation and handle errors
const runValidation = async (data, schema, res) => {
  const { error, value } = schema.validate(data);
  if (error) {
    // Send a generic error message if validation fails
    res.status(400).json({ error: "Please fill in all required fields." });
    return null;
  }
  return value; 
};

exports.addPersonalDetails = async (req, res) => {
  upload.single("profilePicture")(req, res, async (err) => {
    if (err) return res.status(400).json({ error: err.message });

    const validatedData = await runValidation(
      req.body,
      addPersonalDetailsSchema,
      res
    );
    if (!validatedData) return;

    validatedData.profilePicture = req.file ? req.file.path : null;
    addPersonalDetailsQuery(validatedData, res);
  });
};

exports.addVehicleDetails = async (req, res) => {
  upload.single("vehiclePicture")(req, res, async (err) => {
    if (err) return res.status(400).json({ error: err.message });

    const validatedData = await runValidation(
      req.body,
      addVehicleDetailsSchema,
      res
    );
    if (!validatedData) return;

    validatedData.vehiclePicture = req.file ? req.file.path : null;
    addVehicleDetailsQuery(validatedData, res);
  });
};

exports.addBankDetails = async (req, res) => {
  upload.single("PassBookPicture")(req, res, async (err) => {
    if (err) return res.status(400).json({ error: err.message });

    const validatedData = await runValidation(
      req.body,
      addBankDetailsSchema,
      res
    );
    if (!validatedData) return;

    validatedData.PassBookPicture = req.file ? req.file.path : null;
    addBankDetailsQuery(validatedData, res);
  });
};

exports.addClientDetails = async (req, res) => {
  const validatedData = await runValidation(
    req.body,
    addClientDetailsSchema,
    res
  );
  if (!validatedData) return;

  addClientDetailsQuery(validatedData, res);
};

// exports.addDocumentDetails = async (req, res) => {
//   upload.single("documentFile")(req, res, async (err) => {
//     if (err) return res.status(400).json({ error: err.message });

//     const validatedData = await runValidation(req.body, addDocumentDetailsSchema, res);
//     if (!validatedData) return;

//     validatedData.documentFilePath = req.file ? req.file.path : null;
//     addDocumentDetails(validatedData, res);
//   });
// };
