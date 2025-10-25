import {pool} from '../database/connection.js'
// aprende a corregir errores desde la BD
const findAllEducation = async ()=>{
    const query = 'select * from educaciones'
    const {rows} = await pool.query(query)
    return rows
}

export const educationModel ={findAllEducation}