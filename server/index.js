// Imports
const express = require("express");
const expressConfig = require("./config/expressConfig");
const dbConnect = require("./config/dbConfig");
const cors = require('cors');
const router = require("./router"); 


// Local variables
const PORT = 2000;
const app = express();

// Configs
expressConfig(app);
app.use(cors())
app.use("/", router); // Add this line to connect the router

// Connecting to the database
dbConnect()
  .then(() => console.log("Successfully connected to the DB!"))
  .catch((err) => console.log(`Error while connecting in DB: ${err}`));



app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
