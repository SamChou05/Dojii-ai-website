import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODBURI as string);
      console.log("db connected");
    }
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
