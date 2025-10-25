import { pool } from '../database/connection.js'

const findAllNetworks = async ()=>{
    const query = 'select * from redes_sociales';
    const {rows} = await pool.query(query); 
    return rows

}


export const networksModel = {findAllNetworks}