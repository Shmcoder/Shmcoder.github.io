const express = require("express");
const multer = require("multer");
const router = express.Router();
const roleController = require("../CONTROLLER/controller.js");

const upload = multer();

router.post("/addPersonalDetails", roleController.addPersonalDetails);


router.post("/addVehicleDetails", roleController.addVehicleDetails);


router.post("/addBankDetails", roleController.addBankDetails);


router.post("/addClientDetails",upload.none(), roleController.addClientDetails);


// router.post("/addDocumentDetails", roleController.addDocumentDetails);


module.exports = router;
