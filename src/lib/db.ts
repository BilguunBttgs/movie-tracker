import mongoose from "mongoose";

const MONGOBD_URI = process.env.MONGODB_URI;

export const connectDb = async () => {
  const connectionState = mongoose.connection.readyState;
  if (connectionState === 1) {
    console.log("DB already connected");
    return;
  }
  if (connectionState === 2) {
    console.log("DB connecting...");
    return;
  }

  try {
    mongoose.connect(MONGOBD_URI!, {
      dbName: "next14-firmfolio",
      bufferCommands: true,
    });
    console.log("DB connected");
  } catch (error: any) {
    console.log("DB error connection", error);
    throw new Error("Error in connection MONGODB", error);
  }
};
