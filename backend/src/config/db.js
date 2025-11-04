// import mongoose from "mongoose"
// export const connetDB = async ()=> {
//     await mongoose.connect ('mongodb+srv://ttemuujin124_db_user:Temka1224!@database.e3ujygd.mongodb.net/')
//     .then(()=>console.log("connected"))
// }
// backend/src/db.js
// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     await mongoose.connect(
//       process.env.MONGO_URI,
//       { useNewUrlParser: true, useUnifiedTopology: true }
//     );
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.error("MongoDB connection failed:", error);
//     process.exit(1); 
//   }
// };
// src/db.js
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    
  }
};

