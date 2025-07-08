import express,{ Router } from "express";
import { eliminarEspecialidad, insertarEspecialidad, listarEspecialidades, modificarEspecialidad, obtenerEspecialidad } from "../controllers/especialidadesController";
import { authMiddleware } from "../auth/auth.middleware";

const router: Router = express.Router();

/**
 * @swagger
 * /api/v1/especialidades:
 *   get:
 *     summary: Listar todas las especialidades
 *     tags: [Especialidades]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de especialidades obtenida correctamente
 */
router.get('/', authMiddleware, listarEspecialidades);

/**
 * @swagger
 * /api/v1/especialidades/{id}:
 *   get:
 *     summary: Obtener una especialidad por ID
 *     tags: [Especialidades]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la especialidad
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Especialidad encontrada
 *       404:
 *         description: Especialidad no encontrada
 */
router.get('/:id', authMiddleware, obtenerEspecialidad);

/**
 * @swagger
 * /api/v1/especialidades:
 *   post:
 *     summary: Registrar una nueva especialidad
 *     tags: [Especialidades]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *             properties:
 *               nombre:
 *                 type: string
 *                 maxLength: 100
 *                 example: "Cardiología"
 *     responses:
 *       201:
 *         description: Especialidad registrada correctamente
 *       400:
 *         description: Error de validación
 */
router.post('/', authMiddleware, insertarEspecialidad);

/**
 * @swagger
 * /api/v1/especialidades/{id}:
 *   put:
 *     summary: Modificar una especialidad
 *     tags: [Especialidades]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la especialidad
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 maxLength: 100
 *                 example: "Medicina Interna"
 *     responses:
 *       200:
 *         description: Especialidad modificada correctamente
 *       400:
 *         description: Error de validación
 *       404:
 *         description: Especialidad no encontrada
 */
router.put('/:id', authMiddleware, modificarEspecialidad);

/**
 * @swagger
 * /api/v1/especialidades/{id}:
 *   delete:
 *     summary: Eliminar una especialidad
 *     tags: [Especialidades]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la especialidad
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Especialidad eliminada correctamente
 *       404:
 *         description: Especialidad no encontrada
 */
router.delete('/:id', authMiddleware, eliminarEspecialidad);


export default router;

