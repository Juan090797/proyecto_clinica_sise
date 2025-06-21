import { PrismaClient } from "@prisma/client";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { Especialidad } from "../models/especialidad";


const prisma = new PrismaClient();

export const listarEspecialidades = async() => {
    console.log('especialidadesService::listarEspecialidades');

    const especialidades = await prisma.especialidades.findMany({
        where: {
            estado_auditoria: '1'
        },
        orderBy: {
            id_especialidad: 'asc'
        }
    });

    return especialidades;
}
export const obtenerEspecialidad = async(id: number) => {
    console.log('especialidadesService::obtenerEspecialidades');
    const especialidad = await prisma.especialidades.findUnique({
        where: {
            id_especialidad: id
        }
    });
    return especialidad;
}
export const insertarEspecialidad = async(especialidad: Especialidad) => {
    console.log('especialidadesService::insertarEspecialidad');
    await prisma.especialidades.create({
        data: {
            nombre: especialidad.nombre
        }
    });
    return RESPONSE_INSERT_OK;
}
export const modificarEspecialidad = async(id: number, especialidad: Especialidad) => {
    console.log('especialidadesService::modificarEspecialidades');
    await prisma.especialidades.update({
        where: {
            id_especialidad: id
        },
        data: {
            nombre: especialidad.nombre
        }
    });
    return RESPONSE_UPDATE_OK;
}
export const eliminarEspecialidad = async(id: number) => {
    console.log('especialidadesService::eliminarEspecialidades');
    await prisma.especialidades.update({
        where: {
            id_especialidad: id
        },
        data: {
            estado_auditoria: '0'
        }
    });
    return RESPONSE_DELETE_OK;
}   