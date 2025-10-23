import { userController } from "../controllers/userController.js";

import { Router } from "express";

const router = Router();

router.get("/",userController.findAllusers)

// GET

    // Obtener Información de perfil del usuario
router.get(`/usuarios{id}`,)
    // Lista de proyectos del porfolio
router.get('/proyectos',)
    // Obteniendo el detalle de un proyecto espefico
router.get('/proyectos{id}',)
    // Lista todas las habilidaddes del dev
router.get('/habilidades',)
    // Lista la experiencia laboral del desarrollador
router.get('/experiencias',)
    // Lista los enlaces de redes sociales del desarrollador
router.get('/redes',)
    // Lista la formación academica (educación) del desarrollador
router.get('/educacion',)
// POST
    // Envía un mensaje de contacto del desarrollador
router.post('/',)


export default router;