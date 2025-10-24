import { pool } from '../database/connection.js'

const findAllUsers = async() =>{
    const query = 'select * from usuarios'
    const {rows} = await pool.query(query);
    return rows[0]
}

const findUserById = async(id)=>{

    const query = 'select * from usuarios where $1';
    // rows array de conexiones descruturado dentro de lo que devuelve la peticion(consulta) asincrona 
    const {rows} = await pool.query(query,[id]);  /* pool.query(variable que guarda la consulta, [parametros]) */

    return rows[0]
}

export const userModel = {findAllUsers, findUserById}