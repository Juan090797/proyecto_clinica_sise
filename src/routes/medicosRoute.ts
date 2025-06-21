import express, { Router } from "express";
import { 
    eliminarMedico, 
    insertarMedico, 
    listarMedicos, 
    modificarMedico, 
    obtenerMedico 
} from "../controllers/medicosController";

const router: Router = express.Router();

router.get('/', listarMedicos);
router.get('/:id', obtenerMedico);
router.post('/', insertarMedico);
router.put('/:id', modificarMedico);
router.delete('/:id', eliminarMedico);

export default router;
