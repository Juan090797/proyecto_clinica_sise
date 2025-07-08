import express,{ Router } from "express";
import { eliminarTipoDocumento, insertarTipoDocumento, listarTipoDocumentos, modificarTipoDocumento, obtenerTipoDocumento } from "../controllers/tipoDocumentoController";
import { authMiddleware } from "../auth/auth.middleware";



const router: Router = express.Router();


/** 
 * @swagger
 * tags:
 *   - name: TipoDocumento
 *     description: Gestion de tipos de documentos
 */


/**
 * @swagger
 * /api/v1/tipo-documentos:
 *   get:
 *     summary: Listar todos los tipos de documento
 *     tags: [TipoDocumento]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista obtenida correctamente
 */
router.get('/', authMiddleware, listarTipoDocumentos);
router.get('/:id',authMiddleware, obtenerTipoDocumento);
router.post('/', authMiddleware, insertarTipoDocumento);
router.put('/:id',authMiddleware, modificarTipoDocumento);
router.delete('/:id',authMiddleware, eliminarTipoDocumento);


export default router;

