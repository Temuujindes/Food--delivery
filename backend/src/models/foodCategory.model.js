import { Schema,model } from "mongoose";
const foodCategoryScheama = new Schema(
    {
        categoryName:{ type : String, required :true
        },

    },
    { timestamps:true

    }
);
export const FoodCategory = model("foodCategory", foodCategoryScheama);

