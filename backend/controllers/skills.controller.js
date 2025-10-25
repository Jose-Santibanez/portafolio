import { json } from "express";
import { skillsModel } from "../models/skills.model.js";

const allSkills = async(req, res)=>{

    try{
        const skills = await skillsModel.findAllSkills()
        if(!skills){
            return res.status(404).json({message:'skills not found'})
        }
        return res.status(200).json(skills)
    }catch(e){
        console.log(e);
        return res.status(500).json({message : 'Internal server error'})
    }
}


export const skillsController = {allSkills}