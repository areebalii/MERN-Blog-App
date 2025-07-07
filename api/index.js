import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import mongoose from "mongoose";         
import AuthRoute from "./route/Auth.route.js";

dotenv.config()

const PORT = process.env.PORT
const app = express();

app.use(cookieParser())
app.use(express.json())
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}))

// route setup
  app.use("/api/auth", AuthRoute)



mongoose
  .connect(process.env.MONGODB_CONN, { dbName: "mern-blog" })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

 

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const message = err.message || 'Something went wrong'
  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  })
})