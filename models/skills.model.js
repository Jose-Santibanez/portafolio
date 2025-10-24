import { pool } from "../database/connection.js";

const findAllSkills = async () => {
  const query = "select * from habilidades";
  const { rows } = await pool.query(query);
  return rows;
};


export const skillsModel = { findAllSkills}
