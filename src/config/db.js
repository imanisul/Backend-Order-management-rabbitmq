const mongoose = require("mongoose");

const connectDB = async (retries = 5) => {
    while (retries) {
        try {
            await mongoose.connect(process.env.MONGODB_URI);
            console.log("MongoDB connected successfully");
            return;
        } catch(error) {
            console.log(`MongoDB connection error: ${error.message}. Retries left: ${retries - 1}`);
            retries -= 1;
            if (retries === 0) {
                process.exit(1);
            }
            await new Promise(res => setTimeout(res, 5000));
        }
    }
};

module.exports = connectDB;