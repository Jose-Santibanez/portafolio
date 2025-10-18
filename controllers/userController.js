import { userModel } from "../models/userModel.js";

const findAllusers = async()=>{
    try{
        const users = await userModel.allUsers();
        console.log(users)
    }catch(e){
        console.log(e)
    }
}

export const userController = {findAllusers}