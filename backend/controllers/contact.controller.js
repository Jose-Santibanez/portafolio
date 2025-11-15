import { contacModel } from "../models/contact.model.js";


const insertContact = async(req, res) =>{
    const {nombre,email, mensaje} = req.body;
    const newContact ={
        nombre,
        email,
        mensaje
    }
   
    try{
        let contact = await contacModel.insertContact(newContact)
        return res.json(contact)
    } catch(e){
        console.log(e)
        return res.status(500).json({message : "error en el servidor"})
    }
}

export const contactController = { insertContact }