import { Router } from "express";
import { createFoodCategory } from "../controller/foodCategory.controller";
import { signUp } from "../controller/user.controller";
const userRouter = Router();
userRouter.post("/signup,",signUp)
export default userRouter