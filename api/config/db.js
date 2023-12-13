import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.warn(`Connected to Mongo ${conn.connection.host}`.bgMagenta.white);
  } catch (error) {
    console.warn(`Error in mongo ${error}`.bgRed.white);
  }
};

export default connectDB;
