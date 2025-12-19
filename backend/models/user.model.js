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

const registrarUsuario = async(usuario) =>{
  const queryUser = 'insert into usuarios(email) values ($1) returning id' 
  const insertarUsuario = await pool.query(queryUser,[usuario.email])
  const idUsuario = insertarUsuario.rows[0].id;
  /* console.log(insertarUsuario.rows[0]) */
  const queryPerfil = `insert into perfil_usuarios(usuario_id,primer_nombre,segundo_nombre) values( $1, $2, $3) returning usuario_id`
  
  const insertarPerfil = await pool.query(queryPerfil,[idUsuario,usuario.nombres, usuario.apellidos])
 /*  console.log(insertarPerfil.rows[0]) */

  const queryCredenciales = `insert into credenciales(usuario_id, password_hash) values ($1, $2) returning *`
  
  const insertarCredenciales = await pool.query(queryCredenciales,[idUsuario,usuario.password])
/*  console.log(insertarCredenciales.rows[0]) */

 /*  return rows[0] */
}
export const userModel = { findAllUsers, findUserById, validarLogin, registrarUsuario };

