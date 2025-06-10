import express,{ Router } from "express";
import { eliminarTipoDocumento, insertarTipoDocumento, listarTipoDocumentos, modificarTipoDocumento, obtenerTipoDocumento } from "../controllers/tipoDocumentoController";



const router: Router = express.Router();

router.get('/', listarTipoDocumentos);
router.get('/:id', obtenerTipoDocumento);
router.post('/', insertarTipoDocumento);
router.put('/:id', modificarTipoDocumento);
router.delete('/:id', eliminarTipoDocumento);


export default router;

