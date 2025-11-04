import { Schema,model } from "mongoose";
const foodCategoryScheama = new Schema(
    {
        categoryName:{ type : String, required :true
        },

    },
    {timestamps:true

    }
);
export const foodCategory = model("foodCategory", foodCategoryScheama);
backend/src/models/foodCategory.model.js
import { Schema, model } from "mongoose";

const foodCategorySchema = new Schema(
  {
    categoryName: { type: String, required: true },
  },
  { timestamps: true }
);

export const FoodCategory = model("FoodCategory", foodCategorySchema);
