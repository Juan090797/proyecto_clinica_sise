export interface TipoDocumento {
  id_tipo_documento: number;
  nombre: string;
  estado_auditoria: string | null;
  fecha_creacion: Date | null;
  fecha_actualizacion: Date | null;
}
