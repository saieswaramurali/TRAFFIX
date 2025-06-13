import { Router } from "express";
import { Login } from "../controllers/auth.controller.js";

const authRouter = Router() ;

authRouter.post('/login', Login) ; 

export default authRouter ; 