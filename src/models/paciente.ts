export interface Paciente {
    id_paciente: number;
    nombres: string;
    apellidos: string;
    edad: number;
    fecha_nacimiento: Date;
    id_tipo_documento: number;
    numero_documento: string;
    direccion: string;
    correo: string;
    genero: string;
    estado_auditoria: string;
    fecha_creacion: Date;
    fecha_actualizacion?: Date;
}