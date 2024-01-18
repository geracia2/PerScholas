const mongoose = require("mongoose");

const mongoConfig = async () => {
  try {
    console.log(process.env.MONGO_URI);
    const result = await mongoose.connect(process.env.MONGO_URI);
    console.log("database connected", result.connection.host);
  } catch (err) {
    console.log("Mongo Error ", err);
  }
};

module.exports = mongoConfig;
