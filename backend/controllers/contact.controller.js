import { contacModel } from "../models/contact.model.js";
import { userModel } from "../models/user.model";

const contact = async(req, res) =>{
    const {nombre,email, mensaje} = req.body;
    const newContact ={
        nombre,
        email,
        mensaje
    }
    try{
        let contact = await userModel.insertContact(newContact)
        return res.json(contact)
    } catch(e){
        return res.status(500).json({message : "error en el servidor"})
    }
}