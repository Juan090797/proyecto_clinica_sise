import express, { Router } from "express";
import { eliminarHorario, insertarHorario, listarHorarios, modificarHorario, obtenerHorario } from "../controllers/horariosController";

const router: Router = express.Router();

router.get('/', listarHorarios);
router.get('/:id', obtenerHorario);
router.post('/', insertarHorario);
router.put('/:id', modificarHorario);
router.delete('/:id', eliminarHorario);

export default router;