require("dotenv").config();
const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

//conexion a mongoDB

const connection = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(URI, {})
    .then(() => console.log("Database connected!"))
    .catch((err) => console.log(err));
};

module.exports = connection;
