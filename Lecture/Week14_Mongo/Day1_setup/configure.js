const mongoose = require("mongoose");

const mongoConfig = async () => {
    try {
        const result = await mongoose.connect(process.env.MONGO_URI);
        console.log("database connected", result.connection.host);
    } catch (error) {
        console.log(`!! Mongo Error !! => `, error);
    }
};

module.exports = mongoConfig