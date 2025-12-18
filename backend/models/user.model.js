import { pool } from "../database/connection.js";

const findAllUsers = async () => {
  const query = "select * from usuarios";
  const { rows } = await pool.query(query);
  return rows;
};

const findUserById = async (id) => {
  const query = "select pu.primer_nombre || ' ' || pu.segundo_nombre nombre_completo, pu.titulo_profesional from usuarios u join perfil_usuarios pu on u.id = pu.usuario_id where u.id = $1";
  // rows array de conexiones descruturado dentro de lo que devuelve la peticion(consulta) asincrona
  const { rows } = await pool.query(query, [id]); /* pool.query(variable que guarda la consulta, [parametros]) */

  return rows[0];
};

const validarLogin = async(usuario)=>{
  const query = 'select u.email from usuarios u join credenciales cr on u.id = cr.usuario_id  where u.email = $1 and cr.password_hash = $2' // revisar sql tabla usuarios para login
  const { rows } = await pool.query(query,[usuario.email, usuario.password]);
  console.log(rows)
  return rows[0];
}

const registrarUsuario = async(email, perfil, pass) =>{
  const queryUser = 'insert into usuarios(email) values ($1) returning id' 
  const insertarUsuario = await pool.query(queryUser,[email])
  const idPerfil = insertarUsuario.rows[0].id;

  const insertarPerfil = `insert into perfil_usuarios(usuario_id,primer_nombre,segundo_nombre) values( $1, $2, $3)`

  const { rows } = await pool.query(insertarPerfil,[idPerfil,perfil.nombres, perfil.apellidos])
  console.log(rows)
  return rows[0]
}
export const userModel = { findAllUsers, findUserById, validarLogin, registrarUsuario };

