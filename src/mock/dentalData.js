export const pacientes = [
  {
    id: 1,
    nombre: 'María',
    apellido: 'González',
    telefono: '3212114138',
    email: 'maria@example.com',
    fechaNacimiento: '1985-04-15',
    alergias: 'Penicilina',
    notas: 'Sensibilidad en dientes anteriores',
    historial: [
      {
        fecha: '2023-05-10',
        tratamiento: 'Limpieza dental',
        dentista: 'Dr. Pérez',
        costo: 800,
        pagado: true
      },
      {
        fecha: '2023-08-22',
        tratamiento: 'Extracción molar',
        dentista: 'Dr. Pérez',
        costo: 1200,
        pagado: false
      }
    ]
  },
   {
    id: 2,
    nombre: 'Jhon Mario',
    apellido: 'Chilito',
    telefono: '3212114138',
    email: 'jchilito@example.com',
    fechaNacimiento: '1985-04-15',
    alergias: 'Penicilina',
    notas: 'Sensibilidad en dientes anteriores',
    historial: [
      {
        fecha: '2023-05-10',
        tratamiento: 'Limpieza dental',
        dentista: 'Dr. Pérez',
        costo: 800,
        pagado: true
      },
      {
        fecha: '2023-08-22',
        tratamiento: 'Extracción molar',
        dentista: 'Dr. Pérez',
        costo: 1200,
        pagado: false
      }
    ]
  },
];

export const tratamientos = [
  { id: 1, nombre: 'Limpieza dental', duracion: 30, costo: 800 },
  { id: 2, nombre: 'Extracción simple', duracion: 45, costo: 1200 },
  { id: 3, nombre: 'Ortodoncia inicial', duracion: 60, costo: 5000 },
];

export const dentistas = [
  { id: 1, nombre: 'Dr. Juan Pérez', especialidad: 'Ortodoncia' },
  { id: 2, nombre: 'Dra. Laura Martínez', especialidad: 'Endodoncia' },
];