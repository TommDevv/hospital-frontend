export interface ReporteMedico {
  id_reporte: number;
  id_emp: number;
  fecha_generacion: Date;
  tipo_reporte: string;
  resumen: string;
}
