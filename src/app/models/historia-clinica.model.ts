export interface HistoriaClinica {
  cod_hist: number;
  fecha_registro_hora: Date;
  diagnostico: string;
  cod_pac?: number;
  id_emp?: number;
}
