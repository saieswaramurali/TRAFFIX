import Admin from "../models/admin.model.js";

export const Login = (req, res) => {
    res.status(200).json({message: "working"}) ; 
} ; 

export const SignUp = (req, res) => {
    try {
        const {name, email, password} = req.body ; 

        if(!name) {
            res.status(400).json({message: "please provide your name"}) ; 
        }

        if(!email) {
            res.status(400).json({message: "please provide your email"}) ; 
        }

        if(!password) {
            res.status(400).json({message: "please provide your password"}) ; 
        }


    } catch (error) {
        res.status(500).json({success: false, error : error.message}) ; 
    }
} ; 