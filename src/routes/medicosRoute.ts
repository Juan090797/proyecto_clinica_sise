import express, { Router } from "express";
import { 
    eliminarMedico, 
    insertarMedico, 
    listarMedicos, 
    modificarMedico, 
    obtenerMedico 
} from "../controllers/medicosController";
import { authMiddleware } from "../auth/auth.middleware";

const router: Router = express.Router();

/**
 * @swagger
 * /api/v1/medicos:
 *   get:
 *     summary: Listar todos los médicos
 *     tags: [Medicos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de médicos obtenida correctamente
 */
router.get('/', authMiddleware, listarMedicos);

/**
 * @swagger
 * /api/v1/medicos/{id}:
 *   get:
 *     summary: Obtener un médico por ID
 *     tags: [Medicos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del médico
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Médico encontrado
 *       404:
 *         description: Médico no encontrado
 */
router.get('/:id', authMiddleware, obtenerMedico);

/**
 * @swagger
 * /api/v1/medicos:
 *   post:
 *     summary: Registrar un nuevo médico
 *     tags: [Medicos]
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
 *               - id_especialidad
 *             properties:
 *               nombres:
 *                 type: string
 *                 maxLength: 100
 *                 example: "Luis"
 *               apellidos:
 *                 type: string
 *                 maxLength: 100
 *                 example: "González Soto"
 *               correo:
 *                 type: string
 *                 format: email
 *                 maxLength: 100
 *                 example: "luis.gonzalez@hospital.com"
 *               celular:
 *                 type: string
 *                 maxLength: 20
 *                 example: "987654321"
 *               id_especialidad:
 *                 type: integer
 *                 example: 3
 *     responses:
 *       201:
 *         description: Médico registrado correctamente
 *       400:
 *         description: Error de validación de campos
 *       401:
 *         description: No autorizado
 */
router.post('/', authMiddleware, insertarMedico);

/**
 * @swagger
 * /api/v1/medicos/{id}:
 *   put:
 *     summary: Modificar los datos de un médico
 *     tags: [Medicos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del médico a modificar
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
 *                 maxLength: 100
 *                 example: "Luis"
 *               apellidos:
 *                 type: string
 *                 maxLength: 100
 *                 example: "González Soto"
 *               correo:
 *                 type: string
 *                 format: email
 *                 maxLength: 100
 *                 example: "luis.gonzalez@hospital.com"
 *               celular:
 *                 type: string
 *                 maxLength: 20
 *                 example: "987654321"
 *               id_especialidad:
 *                 type: integer
 *                 example: 3
 *     responses:
 *       200:
 *         description: Médico actualizado correctamente
 *       400:
 *         description: Error de validación
 *       401:
 *         description: No autorizado
 *       404:
 *         description: Médico no encontrado
 */
router.put('/:id', authMiddleware, modificarMedico);

/**
 * @swagger
 * /api/v1/medicos/{id}:
 *   delete:
 *     summary: Eliminar un médico
 *     tags: [Medicos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del médico
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Médico eliminado correctamente
 *       404:
 *         description: Médico no encontrado
 */
router.delete('/:id', authMiddleware, eliminarMedico);

export default router;
