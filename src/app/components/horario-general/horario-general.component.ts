import { Component } from '@angular/core';
import {HORARIOGENERAL} from "../../services/horarioData";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


@Component({
  selector: 'app-horario-general',
  templateUrl: './horario-general.component.html',
  styleUrls: ['./horario-general.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule],
})
export class HorarioGeneralComponent {
  displayedColumns: string[] = ['curso','asignaturaGen', 'docente', 'lunes', 'martes','miercoles', 'jueves', 'viernes', 'sabado'];
  dataSource = new MatTableDataSource(HORARIOGENERAL);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
