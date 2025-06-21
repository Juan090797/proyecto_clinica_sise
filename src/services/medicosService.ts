import { PrismaClient } from "@prisma/client";
import { Medico } from "../models/medico";

const prisma = new PrismaClient();

export const listarMedicos = async () => {
    console.log('medicosService::listarMedicos');
    return await prisma.medicos.findMany({
        where: {
            estado_auditoria: '1'
        },
        orderBy: {
            id_medico: 'asc'
        }
    });
}

export const obtenerMedico = async (id: number) => {
    console.log('medicosService::obtenerMedico');
    return await prisma.medicos.findUnique({
        where: {
            id_medico: id
        }
    });
}

export const insertarMedico = async (medico: Medico) => {
    console.log('medicosService::insertarMedico');
    return await prisma.medicos.create({
        data: {
            nombres: medico.nombres,
            apellidos: medico.apellidos,
            correo: medico.correo,
            celular: medico.celular,
            id_especialidad: medico.id_especialidad
        }
    });
}

export const modificarMedico = async (id: number, medico: Medico) => {
    console.log('medicosService::modificarMedico');
    return await prisma.medicos.update({
        where: {
            id_medico: id
        },
        data: {
            nombres: medico.nombres,
            apellidos: medico.apellidos,
            correo: medico.correo,
            celular: medico.celular,
            id_especialidad: medico.id_especialidad
        }
    });
}

export const eliminarMedico = async (id: number) => {
    console.log('medicosService::eliminarMedico');
    return await prisma.medicos.update({
        where: {
            id_medico: id
        },
        data: {
            estado_auditoria: '0'
        }
    });
}
