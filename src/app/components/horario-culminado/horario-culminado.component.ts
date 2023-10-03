import {Component, ViewChild} from '@angular/core';
import {MatTable, MatTableModule} from '@angular/material/table';
import {CLASES_CULMINADAS} from "../../services/horarioData";


@Component({
  selector: 'app-horario-culminado',
  templateUrl: './horario-culminado.component.html',
  styleUrls: ['./horario-culminado.component.css']
})
export class HorarioCulminadoComponent {
  displayedColumns: string[] = ['id', 'asignatura', 'hora'];
  dataSource = [...CLASES_CULMINADAS];

  // @ts-ignore
  @ViewChild(MatTable) table: MatTable<misClases>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * CLASES_CULMINADAS.length);
    this.dataSource.push(CLASES_CULMINADAS[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
}
