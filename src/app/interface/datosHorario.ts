export interface proximaAsignatura {
  id:number;
  asignatura: string;
  hora: string;
  symbol: string;
}


// asignatura culminada
export interface misClases {
  id: number;
  asignatura:String;
  hora: string;

}

// horaio general
export interface horarioGeneral {
  curso: string;
  asignaturaGen: string;
  docente: string;
  lunes: string;
  martes: string;
  miercoles: string;
  jueves: string;
  viernes: string;
  sabado: string;

}
