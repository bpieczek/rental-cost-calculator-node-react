require("dotenv").config();
module.exports = {
  PORT: process.env.PORT || 3001,
  MONGO_URL:
    process.env.MONGO_URL ||
    "mongodb+srv://bartoszpieczek:dYBAV9FhpNMBud7V@updating.zujrzg7.mongodb.net/test",
};
