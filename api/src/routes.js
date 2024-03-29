import { Router } from "express";
import UsuarioController from "./app/controllers/UsuarioController.js";

const router = Router();

router.get('/', UsuarioController.show)
router.post('/', UsuarioController.store)
router.put('/:id', UsuarioController.update)
router.delete('/:id', UsuarioController.delete)


export default router;