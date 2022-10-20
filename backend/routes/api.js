const express = require("express");
const router = express.Router();

const CarsController = require("../controllers/api/CarsController")

router.get('/', CarsController.getAllCars);
router.post('/', CarsController.saveCar);

module.exports = router;