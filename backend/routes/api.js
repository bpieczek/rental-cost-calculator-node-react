const express = require("express");
const router = express.Router();

const CarsController = require("../controllers/api/CarsController");
const sendEmail = require("../utils/sendEmail");

router.get("/", CarsController.getAllCars);
router.post("/sendemail", async (req, res) => {
  const email = req.body.email;
  const message = req.body.message;

  try {
    setTimeout(async function() {
      await sendEmail("Car rental confirmation", message, email)},
      1000
    );

    await sendEmail(`${email} rent cars`, message, process.env.EMAIL_USER);

    res.status(200).json({ success: true, message: "Email Sent" });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
