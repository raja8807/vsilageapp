import mongoose from "mongoose";

export const connectMongoDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  }

  console.log('connected succeees------------------------------->>');

  // return await mongoose.connect(process.env.MONGO_URI);
  return await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI);
};