import UserModel from "../models/user.model.js";
import bcryptjs from "bcryptjs"
export async function registerUserController(req, res) {
    try {
        const {name,email,password} = req.body

        if(!name || !email || !password){
            return res.status(400).json({
                message: "Please fill All required fields!",
                error: true,
                success: false
            })
        }
        const user = await UserModel.findOne({email})

        if(user){
            return res.status(400).json({
                message: "Email already exist",
                error: true,
                success: false
            })
        }
        const salt = await bcryptjs.genSalt(10)

        const hashPassword = await bcryptjs.hash(password, salt)

        const payload = {
            name,
            email,
            password: hashPassword
        }

        const newUser = new UserModel(payload)
        const save= await newUser.save()
        
        return res.json({
            message: "Operation successful",
            error: false,
            success: true
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
}