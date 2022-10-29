const express = require("express");
const router = express.Router();

const CarsController = require("../controllers/api/CarsController");
const EmailContoller = require("../controllers/api/EmailController");

router.get("/", CarsController.getAllCars);
router.get("/mail", EmailContoller.sendMail);

module.exports = router;
