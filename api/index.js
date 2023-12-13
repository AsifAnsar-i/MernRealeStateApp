import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import morgan from "morgan";
import authRouter from "./routes/auth.route.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const port = process.env.port || 8080;

app.use("/api/auth", authRouter); 

app.listen(port, () => {
  console.warn(`server running on port ${port}`.bgGreen.white);
});
