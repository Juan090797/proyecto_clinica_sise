import express, { Router } from "express";
import { eliminarHorario, insertarHorario, listarHorarios, modificarHorario, obtenerHorario } from "../controllers/horariosController";
import { authMiddleware } from "../auth/auth.middleware";

const router: Router = express.Router();

/**
 * @swagger
 * /api/v1/horarios:
 *   get:
 *     summary: Listar todos los horarios
 *     tags: [Horarios]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de horarios obtenida correctamente
 */
router.get('/', authMiddleware, listarHorarios);

/**
 * @swagger
 * /api/v1/horarios/{id}:
 *   get:
 *     summary: Obtener un horario por ID
 *     tags: [Horarios]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del horario
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Horario encontrado
 *       404:
 *         description: Horario no encontrado
 */
router.get('/:id', authMiddleware, obtenerHorario);

/**
 * @swagger
 * /api/v1/horarios:
 *   post:
 *     summary: Registrar un nuevo horario
 *     tags: [Horarios]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id_medico
 *               - dia_semana
 *               - hora_inicio
 *               - hora_fin
 *             properties:
 *               id_medico:
 *                 type: integer
 *                 example: 5
 *               dia_semana:
 *                 type: string
 *                 enum: ['1', '2', '3', '4', '5', '6', '7']
 *                 description: 1 = Lunes, 7 = Domingo
 *                 example: '1'
 *               hora_inicio:
 *                 type: string
 *                 pattern: "^([01]\\d|2[0-3]):([0-5]\\d)$"
 *                 example: "08:00"
 *               hora_fin:
 *                 type: string
 *                 pattern: "^([01]\\d|2[0-3]):([0-5]\\d)$"
 *                 example: "13:00"
 *     responses:
 *       201:
 *         description: Horario registrado correctamente
 *       400:
 *         description: Error de validación
 */
router.post('/', authMiddleware, insertarHorario);

/**
 * @swagger
 * /api/v1/horarios/{id}:
 *   put:
 *     summary: Modificar un horario existente
 *     tags: [Horarios]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del horario a modificar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_medico:
 *                 type: integer
 *                 example: 5
 *               dia_semana:
 *                 type: string
 *                 enum: ['1', '2', '3', '4', '5', '6', '7']
 *                 description: 1 = Lunes, 7 = Domingo
 *                 example: '1'
 *               hora_inicio:
 *                 type: string
 *                 pattern: "^([01]\\d|2[0-3]):([0-5]\\d)$"
 *                 example: "08:00"
 *               hora_fin:
 *                 type: string
 *                 pattern: "^([01]\\d|2[0-3]):([0-5]\\d)$"
 *                 example: "13:00"
 *     responses:
 *       200:
 *         description: Horario actualizado correctamente
 *       400:
 *         description: Error de validación
 *       404:
 *         description: Horario no encontrado
 */
router.put('/:id', authMiddleware, modificarHorario);

/**
 * @swagger
 * /api/v1/horarios/{id}:
 *   delete:
 *     summary: Eliminar un horario
 *     tags: [Horarios]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del horario
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Horario eliminado correctamente
 *       404:
 *         description: Horario no encontrado
 */
router.delete('/:id', authMiddleware, eliminarHorario);

export default router;