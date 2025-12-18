import e from "express";
import { userModel } from "../models/user.model.js";
import jwt from 'jsonwebtoken'
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

const registrar = async( req, res) =>{
  const {email, nombres, apellidos, pass} = req.body;
  const perfil = {nombres, apellidos}
  const infoUsuario  =  await userModel.registrarUsuario(email,perfil, pass)
  
  return res.status(200).json({message:'usuario registrado',infoUsuario})
}




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
