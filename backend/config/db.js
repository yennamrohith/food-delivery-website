import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://yennamrohith1772304:505326@cluster0.a9txgl3.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}