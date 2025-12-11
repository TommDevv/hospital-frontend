📚 DICCIONARIO DE ENDPOINTS — API HIS+

🟦 1. /equipamiento
Método: GET
Descripción: Devuelve el listado completo del equipamiento con su departamento y responsable.
Ejemplo de respuesta:
[
  {
    "cod_eq": 1,
    "nom_eq": "ECG Portátil",
    "departamento": "Medicina Interna",
    "estado": "Operativo",
    "fecha_mantenimiento": "2025-01-10",
    "responsable": "Carlos Pérez",
    "responsable_empleado": {
      "id_emp": 14,
      "persona": {
        "nombre": "Carlos Pérez"
      }
    }
  }
]


🟦 2. /empleados
🔹 GET — Lista de empleados
Descripción: Devuelve todos los empleados con su cargo, rol y datos de persona.
Ejemplo de respuesta:
[
  {
    "id_emp": 14,
    "documento": 12345678,
    "id_dept": 3,
    "cargo": {
      "cargo_id": 1,
      "nombre": "Médico General"
    },
    "rol": {
      "rol_id": 2,
      "nombre": "Doctor"
    },
    "persona": {
      "documento": 12345678,
      "nombre": "Carlos Pérez",
      "correo": "carlos@example.com",
      "id_sede": 1
    }
  }
]


🔹 POST — Crear empleado + persona
Descripción:
Crea primero una persona y luego el empleado asociado.
Body esperado:
{
  "persona": {
    "documento": 12345678,
    "nombre": "Carlos Pérez",
    "correo": "carlos@example.com",
    "fecha_nac": "1990-01-01",
    "genero": "M",
    "direccion": "Calle 123",
    "tipo_doc_id": 1,
    "id_sede": 2
  },
  "empleado": {
    "id_dept": 3,
    "cargo_id": 1,
    "rol_id": 2,
    "hash_contra": "1234"
  }
}

Ejemplo de respuesta:
{
  "mensaje": "Empleado creado exitosamente",
  "id_emp": 14
}


🟦 3. /empleados/<int:id_emp>
🔹 GET — Consultar empleado
Descripción: Devuelve la información completa del empleado solicitado.
Ejemplo de respuesta:
{
  "id_emp": 14,
  "documento": 12345678,
  "id_dept": 3,
  "cargo_id": 1,
  "rol_id": 2,
  "persona": {
    "documento": 12345678,
    "nombre": "Carlos Pérez"
  },
  "cargo": {
    "cargo_id": 1,
    "cargo_nombre": "Médico General"
  },
  "rol": {
    "rol_id": 2,
    "rol_nombre": "Doctor"
  }
}


🔹 PUT — Actualizar empleado (persona + empleado)
Body permitido (parcial o completo):
{
  "persona": {
    "nombre": "Carlos P. Martínez",
    "direccion": "Nueva dirección 321",
    "id_sede": 2
  },
  "empleado": {
    "cargo_id": 3,
    "rol_id": 1
  }
}

Ejemplo de respuesta:
{ "mensaje": "Empleado actualizado correctamente" }


🟦 4. /pacientes
🔹 GET — Lista de pacientes
Ejemplo de respuesta:
[
  {
    "cod_pac": 502,
    "documento": "87654321",
    "persona": {
      "documento": "87654321",
      "nombre": "Ana Gómez"
    }
  }
]


🔹 POST — Crear paciente + persona
Body esperado:
{
  "persona": {
    "documento": 87654321,
    "nombre": "Ana Gómez",
    "fecha_nac": "2002-08-20",
    "genero": "F",
    "direccion": "Calle Luna 45",
    "correo": "ana@example.com",
    "tipo_doc_id": 1,
    "id_sede": 3
  }
}

Respuesta:
{
  "cod_pac": 503,
  "documento": 87654321,
  "persona": {
    "documento": 87654321,
    "nombre": "Ana Gómez"
  }
}


🟦 5. /pacientes/<int:cod_pac>

🔹 GET — Consultar paciente por ID
Descripción:
 Obtiene un paciente junto con su información básica de persona.
Ejemplo de respuesta:
{
  "cod_pac": 502,
  "documento": "87654321",
  "persona": {
    "documento": "87654321",
    "nombre": "Ana Gómez"
  }
}


🔹 PUT — Editar información de la persona asociada al paciente
Descripción:
 Permite actualizar uno o más campos del registro en la tabla personas que está vinculada al paciente.
Campos editables:
nombre (nom_persona)


fecha_nac


genero


direccion (dir_per)


correo (correo_per)


tipo_doc_id


id_sede


Ejemplo de body:
{
  "persona": {
    "nombre": "Ana Gómez Actualizada",
    "correo": "ana.actualizada@example.com",
    "direccion": "Nueva dirección 456"
  }
}

Ejemplo de respuesta:
{
  "mensaje": "Paciente actualizado correctamente"
}


🔹 DELETE — Eliminar paciente por ID
Descripción:
 Elimina solo el registro en la tabla pacientes.
 (No elimina la persona, a menos que se indique lo contrario.)
Ejemplo de respuesta:
{
  "mensaje": "Paciente eliminado correctamente",
  "cod_pac": 502,
  "documento": "87654321"
}


