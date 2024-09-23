const { request } = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = async () => {
  const conn = await mongoose.connect(process.env.Mongoo_URL);
  console.log(`mongo connected: ${conn.connection.host}`);
};

module.exports = connectDB;
