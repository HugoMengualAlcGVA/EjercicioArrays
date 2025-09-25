export interface Calificacion {
    asignatura: string,
    nota: number
}

export interface Alumno {
    codigo: string,
    nombre: string,
    ciudad: string,
    calificaciones: Calificacion[],
    edad: number
}

export const ALUMNOS = [
    {
        'codigo': 'DAW-1-2025',
        'nombre': 'Pepe',
        'ciudad': 'Valencia',
        'calificaciones': [{ 'asignatura': 'PRG', 'nota': 9 },
        { 'asignatura': 'GBD', 'nota': 6 },
        { 'asignatura': 'ING', 'nota': 4 },
        { 'asignatura': 'FOL', 'nota': 3 }
        ],
        'edad': 24
    },
    {
        'codigo': 'DAW-2-2024',
        'nombre': 'Juan',
        'ciudad': 'Castellon',
        'calificaciones': [{ 'asignatura': 'DWC', 'nota': 4 },
        { 'asignatura': 'DWS', 'nota': 6 },
        { 'asignatura': 'DAW', 'nota': 7 },
        { 'asignatura': 'DIW', 'nota': 8 },
        { 'asignatura': 'ING', 'nota': 9 },
        { 'asignatura': 'EIE', 'nota': 2 }
        ],
        'edad': 28
    },
    {
        'codigo': 'DAW-1-2023',
        'nombre': 'Ana',
        'ciudad': 'Valencia',
        'calificaciones': [{ 'asignatura': 'PRG', 'nota': 6 },
        { 'asignatura': 'GBD', 'nota': 2 },
        { 'asignatura': 'ING', 'nota': 6 },
        { 'asignatura': 'FOL', 'nota': 2 }
        ],
        'edad': 22
    },
    {
        'codigo': 'DAW-2-2024',
        'nombre': 'Maria',
        'ciudad': 'Castellon',
        'calificaciones': [{ 'asignatura': 'DWC', 'nota': 4 },
        { 'asignatura': 'DWS', 'nota': 6 },
        { 'asignatura': 'DAW', 'nota': 7 },
        { 'asignatura': 'DIW', 'nota': 8 },
        { 'asignatura': 'ING', 'nota': 4 },
        { 'asignatura': 'EIE', 'nota': 1 }
        ],
        'edad': 30
    }
]
