import { pool } from "../database/connection.js";

const findAllProject = async() =>{
    const query = 'select * from proyectos'
    const {rows} = await pool.query(query)
    return rows
}

export const  projectModel = {findAllProject}