import { Router } from "express";
import { Login, SignUp } from "../controllers/auth.controller.js";

const authRouter = Router() ;

// /api/v1/auth/login
authRouter.post('/login', Login) ; 

// /api/v1/auth/sign-up 
authRouter.post('/sign-up', SignUp) ; 


export default authRouter ; 