import { userController } from "../controllers/user.Controller.js"
import { projectController } from "../controllers/project.controller.js"; 
import {skillsController} from '../controllers/skills.controller.js'
import { experienceController  } from "../controllers/experience.controller.js";
import { networksController } from '../controllers/networks.controller.js'
import { educationController } from "../controllers/education.controller.js";
import { Router } from "express";

const router = Router();

router.get("/",userController.allUsers)

// GET

    // Obtener Información de perfil del usuario
router.get('/usuario/:id',userController.userById)
    // Lista de proyectos del porfolio
router.get('/proyectos',projectController.allProject) 
    // Obteniendo el detalle de un proyecto espefico
router.get('/proyecto/:id',projectController.projectById) 
    // Lista todas las habilidaddes del dev
router.get('/habilidades',skillsController.allSkills)
    // Lista la experiencia laboral del desarrollador
router.get('/experiencias',experienceController.allExperience) 
    // Lista los enlaces de redes sociales del desarrollador
router.get('/redes',networksController.allNetworks) 
    // Lista la formación academica (educación) del desarrollador
router.get('/educacion',educationController.allEducation) 
// POST
    // Envía un mensaje de contacto del desarrollador
/* router.post('/',) */


export default router;