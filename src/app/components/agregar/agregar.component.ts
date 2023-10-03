import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup} from "@angular/forms";
import {tarea} from "../../interface/tarea";

class DialogOverviewExampleDialog {
}

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialog>, private fb: FormBuilder ) {
    this.form = this.fb.group({
      actividad: [''],
      descripcion: [''],
      fecha: [null],

    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  addEditPerson(){

    const tarea: tarea ={
        actividad: this.form.value.actividad,
        descripcion: this.form.value.descripcion,
        fechaLimite: this.form.value.fecha,

    }
    console.log(tarea)

  }

}

