const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://HalaHala:Hh123Zz123@halacoded.asdvs.mongodb.net/"
  );
  console.log(`mongo connected: ${conn.connection.host}`);
};

module.exports = connectDB;
