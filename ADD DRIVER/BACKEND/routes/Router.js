// Router.js
const express = require("express");
const router = express.Router();
const roleController = require("../CONTROLLER/Controller");

router.post("/addPersonalDetails", roleController.addPersonalDetails);
router.post("/addVehicleDetails", roleController.addVehicleDetails) ;
router.post("/addBankDetails", roleController.addBankDetails);
router.post("/addClientDetails", roleController.addClientDetails);
// router.post("/addDocumentDetails", roleController.addDocumentDetails);

module.exports = router;
