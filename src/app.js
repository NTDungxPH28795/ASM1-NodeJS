import express from "express"
import router from "./routers"
import mongoose from "mongoose"
import dotenv from "dotenv";

const app = express()

dotenv.config();

const {PORT, DB_URI} = process.env;

app.use(express.json())

app.use("/api",router)

mongoose.connect('${DB_URI}').then(()=>{
  console.log("Database connected");
})

app.listen(PORT, () => {
  console.log(`Server is running on 8000`)
})