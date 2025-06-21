import { PrismaClient } from "@prisma/client";
import { Cita } from "../models/cita";

const prisma = new PrismaClient();

export const listarCitas = async () => {
  console.log('citasService::listarCitas');
  return await prisma.citas.findMany({
    where: {
      estado_auditoria: '1'
    },
    orderBy: {
      id_cita: 'asc'
    }
  });
}

export const obtenerCita = async (id: number) => {
  console.log('citasService::obtenerCita');
  return await prisma.citas.findUnique({
    where: {
      id_cita: id
    }
  });
}

export const insertarCita = async (cita: Cita) => {
  console.log('citasService::insertarCita');
  return await prisma.citas.create({
    data: {
      id_paciente: cita.id_paciente,
      id_medico: cita.id_medico,
      fecha: cita.fecha,
      hora: cita.hora
    }
  });
}

export const modificarCita = async (id: number, cita: Cita) => {
  console.log('citasService::modificarCita');
  return await prisma.citas.update({
    where: {
      id_cita: id
    },
    data: {
      id_paciente: cita.id_paciente,
      id_medico: cita.id_medico,
      fecha: cita.fecha,
      hora: cita.hora,
      estado_cita: cita.estado_cita,
      estado_auditoria: cita.estado_auditoria,
      fecha_actualizacion: new Date()
    }
  });
}

export const eliminarCita = async (id: number) => {
  console.log('citasService::eliminarCita');
  return await prisma.citas.update({
    where: {
      id_cita: id
    },
    data: {
      estado_auditoria: '0'
    }
  });
}
