export interface Equipamiento {
  cod_eq: number;
  nom_eq: string;
  id_dept: number;
  estado: string;
  fecha_mantenimiento: Date;
  responsable: number;
  departamento?: string;
  responsable_nombre?: string;
  responsable_empleado?: any;
}
