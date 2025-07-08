import express, { Router } from "express";
import { 
  eliminarCita, 
  insertarCita, 
  listarCitas, 
  modificarCita, 
  obtenerCita 
} from "../controllers/citasController";
import { authMiddleware } from "../auth/auth.middleware";

const router: Router = express.Router();

/**
 * @swagger
 * /api/v1/citas:
 *   get:
 *     summary: Listar todas las citas
 *     tags: [Citas]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de citas obtenida correctamente
 */
router.get('/', authMiddleware, listarCitas);

/**
 * @swagger
 * /api/v1/citas/{id}:
 *   get:
 *     summary: Obtener una cita por ID
 *     tags: [Citas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la cita
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cita encontrada
 *       404:
 *         description: Cita no encontrada
 */
router.get('/:id', authMiddleware, obtenerCita);

/**
 * @swagger
 * /api/v1/citas:
 *   post:
 *     summary: Registrar una nueva cita
 *     tags: [Citas]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id_paciente
 *               - id_medico
 *               - fecha
 *               - hora
 *             properties:
 *               id_paciente:
 *                 type: integer
 *                 example: 12
 *               id_medico:
 *                 type: integer
 *                 example: 5
 *               fecha:
 *                 type: string
 *                 format: date
 *                 example: "2025-07-15"
 *               hora:
 *                 type: string
 *                 pattern: "^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$"
 *                 example: "14:30"
 *     responses:
 *       201:
 *         description: Cita registrada correctamente
 *       400:
 *         description: Error de validación
 */
router.post('/', authMiddleware, insertarCita);

/**
 * @swagger
 * /api/v1/citas/{id}:
 *   put:
 *     summary: Modificar una cita existente
 *     tags: [Citas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la cita a modificar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_paciente:
 *                 type: integer
 *                 example: 12
 *               id_medico:
 *                 type: integer
 *                 example: 5
 *               fecha:
 *                 type: string
 *                 format: date
 *                 example: "2025-07-15"
 *               hora:
 *                 type: string
 *                 pattern: "^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$"
 *                 example: "14:30"
 *     responses:
 *       200:
 *         description: Cita modificada correctamente
 *       400:
 *         description: Error de validación
 *       404:
 *         description: Cita no encontrada
 */
router.put('/:id', authMiddleware, modificarCita);

/**
 * @swagger
 * /api/v1/citas/{id}:
 *   delete:
 *     summary: Eliminar una cita
 *     tags: [Citas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la cita a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Cita eliminada correctamente
 *       404:
 *         description: Cita no encontrada
 */
router.delete('/:id', authMiddleware, eliminarCita);

export default router;
