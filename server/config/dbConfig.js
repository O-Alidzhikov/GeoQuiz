const mongoose = require("mongoose");
const dbURL = "mongodb://localhost:27017/GeoQuizDB";

async function dbConnect() {
  await mongoose.connect(dbURL);
}

module.exports = dbConnect;
