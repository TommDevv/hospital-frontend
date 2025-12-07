export interface Departamento {
  id_dept: number;
  nom_dept: string;
}

export interface DepartamentoSede {
  id_sede: number;
  id_dept: number;
}
