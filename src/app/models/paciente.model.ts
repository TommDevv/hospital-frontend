import { Persona } from './persona.model';

export interface Paciente {
  cod_pac: number;
  documento: string | number;
  persona?: {
    documento: string | number;
    nombre: string;
    tipo_doc_id?: number;
    correo?: string;
    fecha_nac?: Date | string;
    genero?: string;
    direccion?: string;
    id_sede?: number;
  };
}
