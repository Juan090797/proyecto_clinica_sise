import { PrismaClient } from "@prisma/client";
import { Paciente } from "../models/paciente";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";

const prisma = new PrismaClient();

export const listarPacientes = async () => {
  console.log('pacientesService::listarPacientes');
  return await prisma.pacientes.findMany({
    where: {
      estado_auditoria: '1'
    },
    orderBy: {
      id_paciente: 'asc'
    }
  });
}

export const obtenerPaciente = async (id: number) => {
  console.log('pacientesService::obtenerPaciente');
  return await prisma.pacientes.findUnique({
    where: {
      id_paciente: id
    }
  });
}

export const insertarPaciente = async (paciente: Paciente) => {
  console.log('pacientesService::insertarPaciente');
  await prisma.pacientes.create({
    data: {
      nombres: paciente.nombres,
      apellidos: paciente.apellidos,
      edad: paciente.edad,
      fecha_nacimiento: paciente.fecha_nacimiento,
      id_tipo_documento: paciente.id_tipo_documento,
      numero_documento: paciente.numero_documento,
      direccion: paciente.direccion,
      correo: paciente.correo,
      genero: paciente.genero
    }
  });
  return RESPONSE_INSERT_OK;
}

export const modificarPaciente = async (id: number, paciente: Paciente) => {
  console.log('pacientesService::modificarPaciente');
  await prisma.pacientes.update({
    where: {
      id_paciente: id
    },
    data: {
      nombres: paciente.nombres,
      apellidos: paciente.apellidos,
      edad: paciente.edad,
      fecha_nacimiento: paciente.fecha_nacimiento,
      id_tipo_documento: paciente.id_tipo_documento,
      numero_documento: paciente.numero_documento,
      direccion: paciente.direccion,
      correo: paciente.correo,
      genero: paciente.genero
    }
  });
  return RESPONSE_UPDATE_OK;
}

export const eliminarPaciente = async (id: number) => {
  console.log('pacientesService::eliminarPaciente');
  await prisma.pacientes.update({
    where: {
      id_paciente: id
    },
    data: {
      estado_auditoria: '0'
    }
  });
  return RESPONSE_DELETE_OK;
}
