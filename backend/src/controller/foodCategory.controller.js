import { foodCategory } from "../models/foodCategory.model";

export const createFood = async (req,res ) =>{
    try{
const{body} = req;
const foodCategory =await  foodCategory.create(body);
res.status(200).send({message:"successfully connected", data:foodCategory})
    } catch(error ){
        res.status(500).send
({message:"smt goes wrong" ,data:null});    }
}
backend/src/controllers/foodController.js
import { FoodCategory } from "../models/foodCategory.model.js";

export const createFoodCategory = async (req, res) => {
  try {
    const { body } = req;
    const category = await FoodCategory.create(body);
    res.status(201).json({ message: "Category created successfully", data: category });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong", data: null });
  }
};
