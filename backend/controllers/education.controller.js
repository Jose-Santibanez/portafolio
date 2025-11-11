import { educationModel } from "../models/education.model.js";

const allEducation = async (req, res)=>{
    try{    
        const educacion = await educationModel.findAllEducation();
       
        if(!educacion){
            return res.status(404).json({message: 'educacion no encontrada'})
        }
        return res.status(200).json(educacion)
    }catch(e){
        return res.status(500).json({message : 'Internal server error'})
    }
}

export const educationController = {allEducation}