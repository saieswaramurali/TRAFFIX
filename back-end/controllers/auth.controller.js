import Admin from "../models/admin.model.js";
import bcrypt from "bcryptjs" ; 

export const Login = async (req, res) => {
   try {
    const {email, password} = req.body ; 

    if(!email) {
        return res.status(400).json({success: false, message: "Please provide your email."}) ; 
    }

    if(!password) {
        return res.status(400).json({success: false, message: "Please provide your password."}) ; 
    }

    const admin = await Admin.findOne({email}).select("+password") ; 

    if(!admin) {
        return res.status(404).json({success: false, message: "The email is not yet registered"}) ; 
    }

    const isValidPassword = await bcrypt.compare(password, admin.password) ; 
     
    if(!isValidPassword) {
        return res.status(400).json({success: false, message: "Password is Invalid."}) ; 
    }

    return res.status(200).json({
        success: true, 
        admin,
    }) ; 

   } catch(error) {
    return res.status(500).json({success: false, error : error.message}) ; 
   }
} ; 

// jwt token is yet to be implemented 
export const SignUp = async (req, res) => {
    try {
        const {name, email, password} = req.body ; 

        if(!name) {
           return res.status(400).json({message: "please provide your name"}) ; 
        }

        if(!email) {
            return res.status(400).json({message: "please provide your email"}) ; 
        }

        if(!password) {
            return res.status(400).json({message: "please provide your password"}) ; 
        }

        const existingAdmin = await Admin.findOne({email}) ; 

        if(existingAdmin) {
            return res.status(400).json({message: "provided email is already registered!!!"}) ; 
        }

        const salt = await bcrypt.genSalt(10) ; 
        const hashedPassword = await bcrypt.hash(password, salt) ; 

        const newAdmin = await Admin.create({name, email, password: hashedPassword}) ; 

        return res.status(201).json({
            success: true, 
            newAdmin, 
        })

    } catch (error) {
        return res.status(500).json({success: false, error : error.message}) ; 
    }
} ; 