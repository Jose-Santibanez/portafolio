import { userModel } from "../models/userModel.js";

const findAllusers = async(req, res)=>{
    try{
        const users = await userModel.allUsers();
        if(!users){
            return res.status(404).json({messsage: "usuarios no encontrados"})
        }
        return res.json(users)
    }catch(e){
        console.log(e)
        return res.status(500).json({message : "error en el servidor"})
    }
}

export const userController = {findAllusers,}