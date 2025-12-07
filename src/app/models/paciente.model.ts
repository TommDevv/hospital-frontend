import { Persona } from './persona.model';

export interface Paciente {
  cod_pac: number;
  documento: string;
  persona?: Persona;
}
