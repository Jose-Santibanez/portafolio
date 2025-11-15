import { userModel } from "../models/user.model.js";

const allUsers = async (req, res) => {
  try {
    const users = await userModel.allUsers();
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

const login = async(req, res) =>{
  const {nombre, email} = req.body;
  const userLogeado = {
    nombre,
    email
  }
  try {
    const user = await userModel.login(userLogeado)
    return res.status(200).json({message: "usuario logeado",user})
  } catch (e) {
    console.log(e)
    return res.status(500).json({messsage: 'Error interno del servidor'})
  }

}

export const userController = { allUsers, userById, login };
