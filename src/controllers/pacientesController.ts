import { Request, Response } from "express";
import * as pacientesService from "../services/pacientesService";
import { ResponseModel } from "../shared/responseModel";
import { STATUS_INTERNAL_SERVER_ERROR } from "../shared/constants";

export const listarPacientes = async (req: Request, res: Response) => {
  console.log('pacientesController::listarPacientes');
  try {
    const response = await pacientesService.listarPacientes();
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}

export const obtenerPaciente = async (req: Request, res: Response) => {
  console.log('pacientesController::obtenerPaciente');
  try {
    const { id } = req.params;
    const response = await pacientesService.obtenerPaciente(Number(id));
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}

export const insertarPaciente = async (req: Request, res: Response) => {
  console.log('pacientesController::insertarPaciente');
  try {
    const response = await pacientesService.insertarPaciente(req.body);
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}

export const modificarPaciente = async (req: Request, res: Response) => {
  console.log('pacientesController::modificarPaciente');
  try {
    const { id } = req.params;
    const response = await pacientesService.modificarPaciente(Number(id), req.body);
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}

export const eliminarPaciente = async (req: Request, res: Response) => {
  console.log('pacientesController::eliminarPaciente');
  try {
    const { id } = req.params;
    const response = await pacientesService.eliminarPaciente(Number(id));
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}
