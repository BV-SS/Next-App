import mongoose from "mongoose";

const MongodbUrl = process.env.MONGODB_URL as string;

if(! MongodbUrl){
   throw new Error("Please add your MongoDB URI to .env");
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export default async function connectDB(){
    if(cached.conn) return cached.conn;
    if(!cached.promise){
        try{
            cached.promise = mongoose.connect(MongodbUrl).then((mongoose) => mongoose);
        }
        catch(error){
            console.log("Cannot connect to DB")
        }
    }
    cached.conn = await cached.promise
    return cached.conn;
}