const mongoose = require("mongoose");
const { MONGO_URL } = require("../config");

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected succesfully!");
  })
  .catch((err) => {
    console.log(err.message);
  });
