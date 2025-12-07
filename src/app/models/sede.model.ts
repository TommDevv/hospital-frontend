export interface Region {
  region_id: number;
  nombre: string;
}

export interface SedeHospitalaria {
  id_sede: number;
  nom_sede: string;
  ciudad: string;
  direccion: string;
  region_id: number;
  region?: Region;
}

export interface TelefonoSede {
  id_sede: number;
  numero: string;
}
