import { userModel } from "../models/user.Model.js";

const findAllUsers = async (req, res) => {
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
        return res
            .status(404)
            .json({ message: "Usuario no encontrado (no devuelve valor)" });
        }
        return res.json(user);
    } catch (e) {
        return res.status(500).json({ e });
    }
};

export const userController = { findAllUsers, userById };
