export interface AuditoriaAcceso {
  id_evento: number;
  id_emp: number;
  accion: string;
  tabla_afectada: string;
  fecha_evento: Date;
  ip_origen: string;
  empleado?: any;
}
