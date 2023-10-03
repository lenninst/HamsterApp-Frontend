import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { SharedDataService } from '../../shared-data-service.service';
import { MatButtonModule } from '@angular/material/button';
import { proximaAsignatura } from '../../interface/datosHorario';
import { CLASES_PROXIMO } from '../../services/horarioData';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {SnackBarComponent} from "../snack-bar/snack-bar.component";

@Component({
  selector: 'app-tabladehorario',
  templateUrl: './tabladehorario.component.html',
  styleUrls: ['./tabladehorario.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule, MatSnackBarModule, MatTableModule],
})
export class TabladehorarioComponent {
  durationInSeconds = 5;

  displayedColumns: string[] = ['id', 'asignatura', 'hora', 'symbol'];
  dataSource: proximaAsignatura[] = [];

  constructor(private sharedDataService: SharedDataService, private snackBar: MatSnackBar) {
    this.dataSource = this.getClasesProximo();
  }



  // Obtener los datos de CLASES_PROXIMO
  private getClasesProximo(): proximaAsignatura[] {

    // Aquí puedes implementar la lógica para obtener los datos de CLASES_PROXIMO
    return CLASES_PROXIMO;
  }

  // Enviar los datos de la fila seleccionada
  enviarDatos(fila: proximaAsignatura) {
    this.sharedDataService.setDatosFilaSeleccionada(fila);

    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      data: 'Elemento agregado correctamente',
    });


  }

  protected readonly CLASES_PROXIMO = CLASES_PROXIMO;
}
