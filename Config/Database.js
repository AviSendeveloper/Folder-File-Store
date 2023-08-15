const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    const uri = process.env.DB_URI;
    return mongoose.connect(uri);
};

module.exports = connectDB;
