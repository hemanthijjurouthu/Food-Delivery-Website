import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_SECRET_KEY).
    then(() => {
        console.log('DB connected');
    })
}
