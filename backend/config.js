require("dotenv").config();
module.exports = {
  PORT: process.env.PORT || 3001,
  MONGO_URL:
    process.env.MONGO_URL ||
    "mongodb+srv://user:userpassword@cluster.d1a5pcz.mongodb.net/car-rental",
};
