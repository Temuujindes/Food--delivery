import {Schema, model} from "mongoose";
 const foodSchema= new mongoose.Schema({
    email: {type: String, required:true, unique:true},
    password: {type: String, required:true},
    phoneNumber: {type:String, required:true},
   address: {type:String, required:true},
   role: {type:String, enum:["user","admin"]},
   orderedFoods: {type:[Schema.ObjectId]},
   isVerified:{
      type:Boolean
   },
 },{
   timestamps: true,

 })
//  const foodModel= mongoose.models.user || mongoose.model('user', userSchema)
 export const User = model ("User", foodSchema);

