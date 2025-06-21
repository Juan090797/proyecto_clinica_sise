import express,{ Router } from "express";
import { eliminarEspecialidad, insertarEspecialidad, listarEspecialidades, modificarEspecialidad, obtenerEspecialidad } from "../controllers/especialidadesController";

const router: Router = express.Router();

router.get('/', listarEspecialidades);
router.get('/:id', obtenerEspecialidad);
router.post('/', insertarEspecialidad);
router.put('/:id', modificarEspecialidad);
router.delete('/:id', eliminarEspecialidad);


export default router;

