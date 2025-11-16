import { pool } from "../database/connection.js";

const findAllUsers = async () => {
  const query = "select * from usuarios";
  const { rows } = await pool.query(query);
  return rows;
};

const findUserById = async (id) => {
  const query = "select * from usuarios where $1";
  // rows array de conexiones descruturado dentro de lo que devuelve la peticion(consulta) asincrona
  const { rows } = await pool.query(query, [
    id,
  ]); /* pool.query(variable que guarda la consulta, [parametros]) */

  return rows[0];
};

const validarLogin = async(usuario)=>{
  const query = 'select * from usuarios where nombre= $1 and email = $2' // revisar sql tabla usuarios para login
  const rows = await pool.query(query,[usuario.nombre, usuario.email]);
  return rows[0];
}
export const userModel = { findAllUsers, findUserById, validarLogin };
