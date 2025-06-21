import { Request, Response } from "express";
import * as citasService from "../services/citasService";
import { ResponseModel } from "../shared/responseModel";
import { STATUS_INTERNAL_SERVER_ERROR } from "../shared/constants";

export const listarCitas = async (req: Request, res: Response) => {
  console.log('citasController::listarCitas');
  try {
    const response = await citasService.listarCitas();
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}

export const obtenerCita = async (req: Request, res: Response) => {
  console.log('citasController::obtenerCita');
  try {
    const { id } = req.params;
    const response = await citasService.obtenerCita(Number(id));
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}

export const insertarCita = async (req: Request, res: Response) => {
  console.log('citasController::insertarCita');
  try {
    const response = await citasService.insertarCita(req.body);
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}

export const modificarCita = async (req: Request, res: Response) => {
  console.log('citasController::modificarCita');
  try {
    const { id } = req.params;
    const response = await citasService.modificarCita(Number(id), req.body);
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}

export const eliminarCita = async (req: Request, res: Response) => {
  console.log('citasController::eliminarCita');
  try {
    const { id } = req.params;
    const response = await citasService.eliminarCita(Number(id));
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}
