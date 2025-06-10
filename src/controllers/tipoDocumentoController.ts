import { Request, Response } from "express";
import * as tipoDocumentoService from "../services/tipoDocumentoService";

export const insertarTipoDocumento = async (req: Request, res: Response) => {
    console.log('tipoDocumentoController::insertarTipoDocumento');
    try {
        // Aquí iría la lógica para insertar un tipo de documento
        //res.status(201).json({ message: 'Tipo de documento insertado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al insertar el tipo de documento' });
    }
}	

export const listarTipoDocumentos = async (req: Request, res: Response) => {
    console.log('tipoDocumentoController::listarTipoDocumentos');
    try {
        const tipoDocumentos = await tipoDocumentoService.listarTipoDocumentos();
        res.json(tipoDocumentos);
    } catch (error) {
        console.log('Error al listar tipos de documentos:', error);
        res.status(500).json({ error: 'Error al listar los tipos de documentos' });
    }
}

export const obtenerTipoDocumento = async (req: Request, res: Response) => {
    try {
        //const { id } = req.params;
        // Aquí iría la lógica para obtener un tipo de documento por su ID
        //const tipoDocumento = {}; // Simulación de datos
        //res.status(200).json(tipoDocumento);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el tipo de documento' });
    }
}

export const modificarTipoDocumento = async (req: Request, res: Response) => {
    try {
        //const { id } = req.params;
        // Aquí iría la lógica para modificar un tipo de documento por su ID
        //res.status(200).json({ message: 'Tipo de documento modificado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al modificar el tipo de documento' });
    }
}

export const eliminarTipoDocumento = async (req: Request, res: Response) => {
    try {
        //const { id } = req.params;
        // Aquí iría la lógica para eliminar un tipo de documento por su ID
        //res.status(200).json({ message: 'Tipo de documento eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el tipo de documento' });
    }
}