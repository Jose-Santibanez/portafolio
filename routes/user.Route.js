import { userController } from "../controllers/user.controller.js";
import { projectController } from "../controllers/project.controller.js"; 
import {skillsController} from '../controllers/skills.controller.js'
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
/* router.get('/experiencias',) */
    // Lista los enlaces de redes sociales del desarrollador
/* router.get('/redes',) */
    // Lista la formación academica (educación) del desarrollador
/* router.get('/educacion',) */
// POST
    // Envía un mensaje de contacto del desarrollador
/* router.post('/',) */


export default router;