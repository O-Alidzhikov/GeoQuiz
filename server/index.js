
const express = require("express");
const expressConfig = require("./config/expressConfig");
const dbConnect = require("./config/dbConfig");
const cors = require('cors');
const router = require("./router"); 



const PORT = 2000;
const app = express();


expressConfig(app);
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true,     
}))
app.use("/", router); 


dbConnect()
  .then(() => console.log("Successfully connected to the DB!"))
  .catch((err) => console.log(`Error while connecting in DB: ${err}`));



app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
