import express, { Router } from "express";
import { 
  eliminarPaciente, 
  insertarPaciente, 
  listarPacientes, 
  modificarPaciente, 
  obtenerPaciente 
} from "../controllers/pacientesController";
import { authMiddleware } from "../auth/auth.middleware";

const router: Router = express.Router();

/**
 * @swagger
 * /api/v1/pacientes:
 *   get:
 *     summary: Listar todos los pacientes
 *     tags: [Pacientes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de pacientes obtenida correctamente
 */
router.get('/', authMiddleware, listarPacientes);

/**
 * @swagger
 * /api/v1/pacientes/{id}:
 *   get:
 *     summary: Obtener un paciente por ID
 *     tags: [Pacientes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del paciente
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Paciente encontrado
 *       404:
 *         description: Paciente no encontrado
 */

router.get('/:id', authMiddleware, obtenerPaciente);

/**
 * @swagger
 * /api/v1/pacientes:
 *   post:
 *     summary: Registrar un nuevo paciente
 *     tags: [Pacientes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombres
 *               - apellidos
 *               - idTipoDocumento
 *               - numeroDocumento
 *               - genero
 *             properties:
 *               nombres:
 *                 type: string
 *                 maxLength: 120
 *                 example: "Juan"
 *               apellidos:
 *                 type: string
 *                 maxLength: 100
 *                 example: "Pérez Ramírez"
 *               edad:
 *                 type: integer
 *                 example: 30
 *               idTipoDocumento:
 *                 type: integer
 *                 example: 1
 *               numeroDocumento:
 *                 type: string
 *                 maxLength: 20
 *                 example: "12345678"
 *               direccion:
 *                 type: string
 *                 example: "Av. Los Álamos 123"
 *               correo:
 *                 type: string
 *                 format: email
 *                 maxLength: 100
 *                 example: "juan@mail.com"
 *               genero:
 *                 type: string
 *                 enum: [M, F]
 *                 example: "M"
 *     responses:
 *       201:
 *         description: Paciente creado correctamente
 *       400:
 *         description: Error de validación de campos
 *       401:
 *         description: No autorizado (token inválido)
 */

router.post('/', authMiddleware, insertarPaciente);

/**
 * @swagger
 * /api/v1/pacientes/{id}:
 *   put:
 *     summary: Modificar los datos de un paciente
 *     tags: [Pacientes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del paciente a modificar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombres:
 *                 type: string
 *                 maxLength: 120
 *                 example: "Juan"
 *               apellidos:
 *                 type: string
 *                 maxLength: 100
 *                 example: "Pérez Ramírez"
 *               edad:
 *                 type: integer
 *                 example: 30
 *               idTipoDocumento:
 *                 type: integer
 *                 example: 1
 *               numeroDocumento:
 *                 type: string
 *                 maxLength: 20
 *                 example: "12345678"
 *               direccion:
 *                 type: string
 *                 example: "Av. Los Álamos 123"
 *               correo:
 *                 type: string
 *                 format: email
 *                 maxLength: 100
 *                 example: "juan@mail.com"
 *               genero:
 *                 type: string
 *                 enum: [M, F]
 *                 example: "M"
 *     responses:
 *       200:
 *         description: Paciente modificado correctamente
 *       400:
 *         description: Error de validación de campos
 *       401:
 *         description: No autorizado
 *       404:
 *         description: Paciente no encontrado
 */


router.put('/:id', authMiddleware, modificarPaciente);

/**
 * @swagger
 * /api/v1/pacientes/{id}:
 *   delete:
 *     summary: Eliminar un paciente
 *     tags: [Pacientes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del paciente
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Paciente eliminado correctamente
 *       404:
 *         description: Paciente no encontrado
 */

router.delete('/:id', authMiddleware, eliminarPaciente);

export default router;
