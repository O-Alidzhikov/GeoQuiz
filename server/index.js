// Imports
const express = require("express");
const expressConfig = require("./config/expressConfig");
const dbConnect = require("./config/dbConfig");


// Local variables
const app = express();

// Configs
expressConfig(app);


// Connecting to the database
dbConnect()
  .then(() => console.log("Successfully connected to the DB!"))
  .catch((err) => console.log(`Error while connecting in DB: ${err}`));



app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
