import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./DB/db.js";

// Load environment variables
dotenv.config({ path: "./.env" });

// Connect to Database
connectDB();
