import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectInstance = await mongoose.connect(`${process.env.MONGODB}/${DB_NAME}`, {
            
        });

        console.log(`\n MongoDB Connected !! DB HOST: ${connectInstance.connection.host}`);

    } catch (error) {
        console.error("MONGODB CONNECTION ERROR:", error);
        process.exit(1); // Exit process if DB connection fails
    }
};

export default connectDB;
