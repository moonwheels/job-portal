import mongoose from "mongoose";

// Function to connect to the MongoDB database
const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("MongoDB connected")
    );

    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
