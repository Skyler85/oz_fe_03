const mongoose = require("mongoose");
const { collection } = require("../models/User");
require('dotenv').config();

const connectWithDB = () => {
    mongoose
        .set("strictQuery", false)
        .connect(process.env.DB_URL)
        .then(console.log(`DB connection established`))
        .catch((err) => {
            console.log(`DB connection error: ${err}`);
            process.exit(1);
        });
};

module.exports = connectWithDB;
