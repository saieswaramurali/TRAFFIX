import express from "express" ; 
import {PORT} from './config/env.js' ; 

import authRouter from "./routes/auth.routes.js";
import connectToDatabase from "./database/mongodb.js";

const app = express() ; 

app.get("/", (req, res) => {
    res.send("Welcome to TRAFFIX API") ; 
})

app.use(express.json()) ; 

app.use("/api/v1/auth", authRouter) ; 

app.listen(PORT, async() => {
    console.log(`the server is running on http://localhost:${PORT}`) ; 
    await connectToDatabase() ; 
}) ; 


export default app ; 
