import e from "express";
import { userModel } from "../models/user.model.js";
import jwt from 'jsonwebtoken'
import bcrypt from "bcryptjs";

// trae todos los usuarios
const allUsers = async (req, res) => {
  try {
    const users = await userModel.findAllUsers();
    if (!users) {
      return res.status(404).json({ messsage: "usuarios no encontrados" });
    }
    return res.json(users);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "error en el servidor" });
  }
};

//  Buscar por ID
const userById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await userModel.findUserById(id);
        if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado (no devuelve valor)" });
        }
        return res.json(user);
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message:'Error interno del servidor' });
    }
};

// Registro
const registrar = async( req, res) =>{
  const {email, nombres, apellidos, password} = req.body;

  const perfil = {
    email,
    nombres, 
    apellidos,
    password: bcrypt.hashSync(password.toString(), 10),
  }
  
  try{
      const infoUsuario  =  await userModel.registrarUsuario(perfil)    
      return res.status(201).json({message:'usuario creado',infoUsuario})

    }catch(e){
      return res.status(500).json({message: "Error interno del servidor"}) 
  }
}



// Login
const login = async(req, res) =>{
  const {email, password} = req.body;
  const loginUser = {
    email,
    password
  }
  
  try {
    const user = await userModel.validarLogin(loginUser)
    
   /*  const token = jwt.sign(loginUser,"az_AZ", {expiresIn : 60}) */

    /* return res.status(200).json({message: "usuario logeado",token,user}) */
    return res.status(200).json({message: "usuario logeado",user})
  } catch (e) {
    console.log(e)
    return res.status(500).json({messsage: 'Error interno del servidor'})
  }

}




export const userController = { allUsers, userById, login, registrar};
