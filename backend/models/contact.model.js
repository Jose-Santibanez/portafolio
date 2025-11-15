// importamos el pool de conexiones
import { pool } from "../database/connection.js";

const insertContact = async(contacto) =>{
    const query = 'insert into contactos (nombre,email,mensaje) values ($1,$2,$3)';
    const {rows} = await pool.query(query,[])  //falta las parametros
    return rows[0]
} 

export const contacModel = { insertContact}