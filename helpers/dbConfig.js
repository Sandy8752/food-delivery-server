const mongoose = require("mongoose");

const { MONGODB_URL } = process.env;

const dbConnect = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Mongodb connection established");
  } catch (error) {
    console.log(error, "Mongodb connection error");
  }
};

module.exports = dbConnect;