import { Persona } from './persona.model';

export interface Cargo {
  cargo_id: number;
  cargo_nombre: string;
}

export interface Rol {
  rol_id: number;
  rol_nombre: string;
}

export interface Empleado {
  id_emp: number;
  documento: string;
  id_dept: number;
  cargo_id: number;
  rol_id: number;
  hash_contra?: string;
  persona?: Persona;
  cargo?: Cargo;
  rol?: Rol;
}
