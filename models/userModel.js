import { pool } from '../database/connection.js'

const allUsers = async() =>{
    const query = 'select * from usuarios'
    const {rows} = await pool.query(query);
    return rows[0]
}

const userById = async()=>{
    
}

export const userModel = {allUsers}