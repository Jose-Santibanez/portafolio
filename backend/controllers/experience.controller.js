import { experiencesModel } from "../models/experience.model.js";

const allExperience = async(req, res)=>{
    try{    
        const experiencias = await experiencesModel.findAllExperience();
        if(!experiencias){
            return res.status(404).json({message: 'Experience not found'})
        }
        return  res.status(200).json(experiencias)
    }catch(e){
        return res.status(500).json({message: 'Internal Server Error'})
    }
}

export const experienceController = {allExperience}