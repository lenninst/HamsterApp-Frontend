import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {DatePipe, NgIf} from "@angular/common";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";

import {SharedDataService} from "../../shared-data-service.service";

class DialogOverviewExampleDialog {
}

class tarea {
}

@Component({
  selector: 'app-recordatorio',
  templateUrl: './recordatorio.component.html',
  styleUrls: ['./recordatorio.component.css'],
  standalone: true,
  imports: [
    NgIf,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    DatePipe,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class RecordatorioComponent {

  asignatura:string = 'Calidad de software';
  hora:string= '10pm'
  descripcion:string='Recuerda ingresar a tiempo, por que otro modo tendras falta xd';
  title: string = 'Proximas clases'

  datosFilaSeleccionada: any;

  // recive los datos de horarios
  constructor(private sharedDataService: SharedDataService) {
    this.datosFilaSeleccionada = this.sharedDataService.getDatosFilaSeleccionada();
  }

  borrarRecordatorio() {
    this.asignatura = '';
    this.hora = '';
    this.descripcion = 'Aun no se a agregado un recordatorio';
  }
}
