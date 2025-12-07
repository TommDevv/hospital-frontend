export interface Equipamiento {
  cod_eq: number;
  nom_eq: string;
  id_dept: number;
  estado: string;
  fecha_mantenimiento: Date;
  responsable: number;
  responsable_empleado?: any;
}
