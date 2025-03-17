import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { DB_NAME } from './constants.js';
import connectDB from './DB/db.js';
import app from './app.js'; 

// Load environment variables
dotenv.config({ path: './.env' });

// Connect to Database
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running at port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((error) => {
    console.log('MongoDB Connection Failed:', error);
  });
