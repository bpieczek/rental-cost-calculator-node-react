require("dotenv").config();
module.exports = {
  PORT: process.env.PORT || 3001,
  MONGO_URL: process.env.MONGO_URL,
};
