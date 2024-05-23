import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const DBConnect = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(DBConnect.connection.host); // connection.host =>only show production connection
    } catch (err) {
        console.log('DB not connected', err);
        process.exit(1);
    }
}

export default connectDB;