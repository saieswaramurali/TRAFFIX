import mongoose from "mongoose";

import {DB_URI, NODE_ENV} from "../config/env.js" ; 

if(!DB_URI) {
    throw new Error("please define the DB_URI in the env variables") ; 
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI) ; 
        console.log(`Connected to the database in the ${NODE_ENV} mode!!!`) ; 
    } catch (error) {
        console.error(`Error connecting to the database ${error}!!!`) ; 
        process.exit(1) ; 
    }
} ; 

export default connectToDatabase ; 