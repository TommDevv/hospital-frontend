export interface Proveedor {
  proveedor_id: number;
  nombre: string;
  region_id: number;
}

export interface Medicamento {
  cod_med: number;
  nom_med: string;
  descripcion: string;
  unidad: string;
  proveedor_id: number;
  proveedor?: Proveedor;
}

export interface RegistroMedicamento {
  cod_med: number;
  id_dept: number;
  fecha: Date;
  observacion: string;
}

export interface Stock {
  cod_med: number;
  id_sede: number;
  cantidad: number;
  medicamento?: Medicamento;
}
