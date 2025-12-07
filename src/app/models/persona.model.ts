export interface TipoDocumento {
  tipo_doc_id: number;
  tipo_doc_nombre: string;
}

export interface Persona {
  documento: string;
  tipo_doc_id: number;
  nombre: string;
  direccion: string;
  fecha_nac: Date;
  genero: string;
  correo: string;
  id_sede: number;
  tipo_documento?: TipoDocumento;
}

export interface TelefonoPersona {
  documento: string;
  numero: string;
}
