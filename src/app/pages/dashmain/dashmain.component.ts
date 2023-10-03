import { Component } from '@angular/core';

import {DatePipe} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {DataSource} from "@angular/cdk/collections";
import {Observable, ReplaySubject} from "rxjs";
import {positionElements} from "ngx-bootstrap/positioning";


// components import
import {AgregarComponent} from "../../components/agregar/agregar.component";
import { MatDialog } from '@angular/material/dialog';


export interface PeriodicElement {
  position: number;
  actividad: string;
  descripcion: string;
  fechaVencimiento: Date;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, actividad: 'Examen de Ingles', descripcion: 'Examen en la aula 843', fechaVencimiento:new Date() },
  {position: 2, actividad: 'Actualizacon de foto', descripcion: 'Actialize la foto para la entrega de carnet', fechaVencimiento: new Date()},
  {position: 3, actividad: 'Pagos pendientes', descripcion: 'Tienes un pago pendiente por 18 dolares', fechaVencimiento: new Date()},
  {position: 4, actividad: 'Apelacion de asistencia', descripcion: 'Necesita subir un comprobante para justificar la falta', fechaVencimiento:new Date()},
  {position: 5, actividad: 'Reunión ', descripcion: 'Reunion para tratar asustos internos', fechaVencimiento:new Date()},
  {position: 6, actividad: 'Revicion de notas', descripcion: 'Debe revisar y confirmar sus calificacion', fechaVencimiento: new Date()},

];

@Component({
  selector: 'app-dashmain',
  templateUrl: './dashmain.component.html',
  styleUrls: ['./dashmain.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatTableModule, DatePipe],

})
export class DashmainComponent {
  displayedColumns: string[] = ['position', 'actividad', 'descripcion', 'fechaVencimiento', 'accion', 'accion2'];
  dataToDisplay = [...ELEMENT_DATA];

  dataSource = new ExampleDataSource(this.dataToDisplay);

  // funcion vinculada con el boton agregar.
  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataToDisplay = [...this.dataToDisplay, ELEMENT_DATA[randomElementIndex]];
    this.dataSource.setData(this.dataToDisplay);
  }

  // eliminate the activities
  removeData(index: number) {
    this.dataToDisplay.splice(index, 1);
    this.dataSource.setData(this.dataToDisplay);
  }

  // modify column
  modifyData(){


  }
  constructor(public dialog: MatDialog) {}


  protected readonly positionElements = positionElements;

  abrirComponente(): void {
    const dialogRef = this.dialog.open(AgregarComponent, {
      width: '550px',
      disableClose: true,
    });
  }
}

class ExampleDataSource extends DataSource<PeriodicElement> {
  private _dataStream = new ReplaySubject<PeriodicElement[]>();

  constructor(initialData: PeriodicElement[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<PeriodicElement[]> {
    return this._dataStream;
  }

  disconnect() {
  }

  setData(data: PeriodicElement[]) {
    this._dataStream.next(data);
  }






}
