const express = require("express");
const router = express.Router();

const CarsController = require("../controllers/api/CarsController");
const sendEmail = require("../utils/sendEmail");

router.get("/", CarsController.getAllCars);
router.post("/sendemail", async (req, res) => {
  try {
    await sendEmail(
      "NIESAMOWITE",
      "ZADZIAŁAŁO!",
      "bartoszpieczek@gmail.com",
      "bartoszpieczek@gmail.com"
    );
    res.status(200).json({ success: true, message: "Email Sent" });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
