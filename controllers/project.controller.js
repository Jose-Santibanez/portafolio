import { projectModel } from "../models/project.model.js";

const allProject = async(req, res)=>{
    try{
        const projects = await projectModel.findAllProject()
        if(!projects){
            res.status(404).json({message: 'projectos no encontrados'})
        }
        return res.json(projects)
    }catch(e){
        console.log(e);
        res.status(500).json({message: 'Error interno del servidor'});
    }
    
    
}

export const projectController = { allProject}