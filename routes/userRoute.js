import { userController } from "../controllers/userController.js";

import { Router } from "express";

const router = Router();

router.get('/',userController.findAllusers)

export default router;