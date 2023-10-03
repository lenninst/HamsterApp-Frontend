import { Component } from '@angular/core';


@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent {
  asignatura:string = 'Emprendimiento';
  hora: string = '12pm';


  irAPaginaZoom() {
    const urlZoom = 'https://explore.zoom.us/es/products/meetings/';
    window.open(urlZoom, '_blank');
  }
}
