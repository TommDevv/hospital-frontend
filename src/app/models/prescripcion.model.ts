export interface Prescripcion {
  id_presc: number;
  cod_hist: number;
  cod_med: number;
  dosis: string;
  frecuencia: string;
  duracion: string;
  fecha_emision: Date;
  medicamento?: any;
}
