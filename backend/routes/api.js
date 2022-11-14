const express = require("express");
const router = express.Router();

const CarsController = require("../controllers/api/CarsController");
const RentingController = require("../controllers/api/RentingController");
const sendEmailController = require("../controllers/sendEmailController");

router.get("/", CarsController.getAllCars);

router.post("/rentcar", RentingController.rentCar);
router.delete("/rentcar", RentingController.databaseClearing);

router.post("/sendemail", sendEmailController.emailSending);

module.exports = router;
