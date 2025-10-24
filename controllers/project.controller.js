import { projectModel } from "../models/project.model.js";

const allProject = async (req, res) => {
  try {
    const projects = await projectModel.findAllProject();
    if (!projects) {
      res.status(404).json({ message: "projectos no encontrados" });
    }
    return res.json(projects);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

const projectById = async(req, res) =>{
    const {id} =  req.params;
    try{
        const project = await projectModel.findProjectById(id);
        if(!project){
            return res.status(404).json({message: 'Proyecto no encotrado'})
        }
        return res.status(200).json(project)
    }catch(e){
        console.log(e)
        return res.status(500).json({message: 'Internal server error'})
    }
}
export const projectController = { allProject,projectById };
