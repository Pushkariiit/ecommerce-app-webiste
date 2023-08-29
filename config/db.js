import mongoose from "mongoose";
import colors from 'colors';

const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connection to Database succesfull at host ${conn.connection.host}`.bgGreen.white);
    }
    catch(e){
        console.log(`error in connection %{e}`.bgRed.white);
    }
}

export default connectDB;