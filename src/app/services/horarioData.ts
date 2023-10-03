import {horarioGeneral, misClases, proximaAsignatura} from "../interface/datosHorario";

// datos de proxima asiganatura
export const CLASES_PROXIMO: proximaAsignatura[] = [
  {id:1, asignatura: 'programacion 2', hora: '12pm-2pm', symbol: ''},
  {id:2, asignatura: 'Calidad de software', hora: '9am-11am', symbol: ''},
  {id:3, asignatura: 'Inteligenica de negocios', hora: '11am-12pm', symbol: ''},

];



// CLASES CULMINADAS

export const CLASES_CULMINADAS: misClases[] = [
  {id: 1, asignatura: 'Desarrollo web', hora: '7am-9am'},
  {id: 2, asignatura: 'Calculo integral', hora: '9am-10am'},
  {id: 3, asignatura: 'Estadistica', hora: '11am-12pm'},


];


// datos de horario general

export const HORARIOGENERAL: horarioGeneral[] = [
  { curso: 'MA 7-1',
    asignaturaGen: 'calidad de software',
    docente: 'Marco Feliz',
    lunes: '',
    martes: '',
    miercoles: '12pm',
    jueves: '',
    viernes: '',
    sabado: '',
  },

  { curso: 'MA 7-1',
    asignaturaGen: 'Gastronimia avanzada',
    docente: 'Marco Feliz',
    lunes: '10am',
    martes: '',
    miercoles: '5pm',
    jueves: '',
    viernes: '',
    sabado: '3pm',
  },

  { curso: 'MA 7-1',
    asignaturaGen: 'Chino mandarin',
    docente: 'Marco Triste',
    lunes: '9:30am',
    martes: '12pm',
    miercoles: '',
    jueves: '',
    viernes: '10am',
    sabado: '',
  },

  { curso: 'MA 8-1',
    asignaturaGen: 'calidad de software',
    docente: 'Marco Feliz',
    lunes: '',
    martes: '3am',
    miercoles: '',
    jueves: '',
    viernes: '9am',
    sabado: '',
  },

  { curso: 'MA 7-4',
    asignaturaGen: 'calidad de software',
    docente: 'Marco Feliz',
    lunes: '6am',
    martes: '',
    miercoles: '11am',
    jueves: '2pm',
    viernes: '',
    sabado: '1:30pm',
  },

  { curso: 'MA 7-1',
    asignaturaGen: 'calidad de software',
    docente: 'Marco Feliz',
    lunes: '',
    martes: '',
    miercoles: '12pm',
    jueves: '',
    viernes: '',
    sabado: '',
  },





];
