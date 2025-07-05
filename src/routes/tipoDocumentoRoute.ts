import express,{ Router } from "express";
import { eliminarTipoDocumento, insertarTipoDocumento, listarTipoDocumentos, modificarTipoDocumento, obtenerTipoDocumento } from "../controllers/tipoDocumentoController";
import { authMiddleware } from "../auth/auth.middleware";



const router: Router = express.Router();

router.get('/', authMiddleware, listarTipoDocumentos);
router.get('/:id',authMiddleware, obtenerTipoDocumento);
router.post('/', authMiddleware, insertarTipoDocumento);
router.put('/:id',authMiddleware, modificarTipoDocumento);
router.delete('/:id',authMiddleware, eliminarTipoDocumento);


export default router;

