const mongoose = require("mongoose");

const RentingSchema = new mongoose.Schema(
  {
    whichCar: {
      type: String,
      required: true,
    },
    from: {
      type: Date,
      required: true,
    },
    to: {
      type: Date,
      required: true,
    },
    whosRenting: {
      type: String,
      required: true,
    },
  },
  {
    collection: "renting",
  }
);

const Renting = mongoose.model("Renting", RentingSchema);

module.exports = Renting;
