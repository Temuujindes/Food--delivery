import {router} from "express"
const createFood  = Router();
router.post("/",createFoodCategory);
backend/src/routes/foodRoutes.js
import express from "express";
import { createFoodCategory } from "../controllers/foodController.js";

const router = express.Router();

router.post("/", createFoodCategory);

export default router;
