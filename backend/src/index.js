
import express from "express";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import { connectDB } from "./config/db.js";

import { FoodCategory } from "./models/foodCategory.model.js";


configDotenv();

const app = express();
const port = process.env.PORT || 4000;


app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("API working ");
});

connectDB();

console.log("MONGO_URI:", process.env.MONGO_URI); 
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
