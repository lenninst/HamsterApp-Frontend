import {Component, OnInit} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";
import {MatDialog} from "@angular/material/dialog";
import {RecordatorioComponent} from "../recordatorio/recordatorio.component";
import {FormsModule} from "@angular/forms";

interface Datos {
  nombre: string;
  edad: number;
  ciudad: string;
  // otras propiedades de datos...
}


@Component({
  selector: 'app-login-nav',
  templateUrl: './login-nav.component.html',
  styleUrls: ['./login-nav.component.css'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, NgIf, MatInputModule, MatMenuModule, FormsModule]
})


export class LoginNavComponent  {
  datos: Datos[] = [
    { nombre: 'Juan', edad: 25, ciudad: 'Madrid' },
    { nombre: 'María', edad: 30, ciudad: 'Barcelona' },
    { nombre: 'Pedro', edad: 28, ciudad: 'Sevilla' },
    { nombre: 'Laura', edad: 22, ciudad: 'Valencia' },
    { nombre: 'Carlos', edad: 35, ciudad: 'Madrid' }

  ];
  cadenaBusqueda: string = '';
  resultados: any[] = [];


  //logica de busqueda

  buscar(): void {
    this.resultados = [];

    if (this.cadenaBusqueda.trim() !== '') {
      this.resultados = this.datos.filter((item: Datos) => item.nombre.includes(this.cadenaBusqueda));
    }
  }

  // abrir recordatorio
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(RecordatorioComponent, {
      width: '500px'
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
