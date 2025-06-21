import express, { Router } from "express";
import { 
  eliminarPaciente, 
  insertarPaciente, 
  listarPacientes, 
  modificarPaciente, 
  obtenerPaciente 
} from "../controllers/pacientesController";

const router: Router = express.Router();

router.get('/', listarPacientes);
router.get('/:id', obtenerPaciente);
router.post('/', insertarPaciente);
router.put('/:id', modificarPaciente);
router.delete('/:id', eliminarPaciente);

export default router;
