import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  datosFilaSeleccionada: any;

  setDatosFilaSeleccionada(datos: any) {
    this.datosFilaSeleccionada = datos;
  }

  getDatosFilaSeleccionada() {
    return this.datosFilaSeleccionada;
  }
}
