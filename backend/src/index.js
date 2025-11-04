
import express from "express";
import bodyParser from "body-parser";
import { config as configDotenv } from "dotenv";
import { connectDB } from "./config/db.js";  // <-- fix here

configDotenv();

const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send(" working");

});

connectDB(); 

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
