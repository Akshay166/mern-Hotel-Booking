import express from "express";
const app = express();

import mongoose from "mongoose";
import dotenv from "dotenv";
 import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
// import roomsRoute from "./routes/rooms.js";
dotenv.config();
import cors from "cors";
const cnct =async ()=> {

    try{
        await mongoose.connect(process.env.MONGO);
        console.log("mongodb is connected :)");
    }catch(error) {
       throw error
    }
};



app.use(express.json())
app.use(cookieParser())
app.use(cors());
app.get("/",(req,res)=>{
  res.setHeader("Access-Control-Allow-Credentials","true");
  res.json("server start");
   
});

 app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

const PORT=process.env.PORT || 8000

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });
  
app.listen(PORT,()=>{
    cnct();
    console.log("hi Akshay")
})
