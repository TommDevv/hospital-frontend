export interface TipoServicio {
  cod_servicio: number;
  nombre: string;
}

export type EstadoCita = 'aplazada' | 'tomada' | 'en desarrollo';

export interface Cita {
  id_cita: number;
  cod_pac: number;
  id_emp: number;
  fecha_hora: Date;
  cod_servicio: number;
  estado: EstadoCita;
  paciente?: any;
  medico?: any;
  tipo_servicio?: TipoServicio;
}
