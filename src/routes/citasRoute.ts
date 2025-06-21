import express, { Router } from "express";
import { 
  eliminarCita, 
  insertarCita, 
  listarCitas, 
  modificarCita, 
  obtenerCita 
} from "../controllers/citasController";

const router: Router = express.Router();

router.get('/', listarCitas);
router.get('/:id', obtenerCita);
router.post('/', insertarCita);
router.put('/:id', modificarCita);
router.delete('/:id', eliminarCita);

export default router;
