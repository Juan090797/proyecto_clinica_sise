import { Request, Response } from "express";
import * as tipoDocumentoService from "../services/tipoDocumentoService";
import { ResponseModel } from "../shared/responseModel";
import { STATUS_INTERNAL_SERVER_ERROR } from "../shared/constants";

export const insertarTipoDocumento = async (req: Request, res: Response) => {
    console.log('tipoDocumentoController::insertarTipoDocumento');
    try {
        const response = await tipoDocumentoService.insertarTipoDocumento(req.body);
        res.json(ResponseModel.success(null,response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}	

export const listarTipoDocumentos = async (req: Request, res: Response) => {
    console.log('tipoDocumentoController::listarTipoDocumentos');
    try {
        const tipoDocumentos = await tipoDocumentoService.listarTipoDocumentos();
        res.json(ResponseModel.success(tipoDocumentos));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const obtenerTipoDocumento = async (req: Request, res: Response) => {
    console.log('tipoDocumentoController::obtenerTipoDocumento');
    try {
        const { id } = req.params;
        const tipoDocumento = await tipoDocumentoService.obtenerTipoDocumento(Number(id));
        res.json(ResponseModel.success(tipoDocumento));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const modificarTipoDocumento = async (req: Request, res: Response) => {
    console.log('tipoDocumentoController::modificarTipoDocumento');
    try {
        const { id } = req.params;
        const response = await tipoDocumentoService.modificarTipoDocumento(Number(id), req.body);
        res.json(ResponseModel.success(null,response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const eliminarTipoDocumento = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await tipoDocumentoService.eliminarTipoDocumento(Number(id));
        res.json(ResponseModel.success(null, response));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}