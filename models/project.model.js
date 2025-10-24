import { pool } from "../database/connection.js";

const findAllProject = async() =>{
    const query = 'select * from proyectos'
    const {rows} = await pool.query(query)
    return rows
}

const findProjectById = async(id)=>{
    const query = 'select * from proyectos where id = $1'
    const {rows} = await pool.query(query,[id]);
    return rows[0]
}

export const  projectModel = {findAllProject, findProjectById}