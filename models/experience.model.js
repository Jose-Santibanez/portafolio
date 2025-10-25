import { pool } from "../database/connection.js";

const findAllExperience = async()=>{
    const query = 'select * from experiencias';
    const {rows} = await pool.query(query)

    return rows
}

export const experiencesModel = { findAllExperience }