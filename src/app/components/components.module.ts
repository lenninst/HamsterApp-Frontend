import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AgregarComponent } from './agregar/agregar.component';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { TabladehorarioComponent } from './tabladehorario/tabladehorario.component';
import {MatTabsModule} from "@angular/material/tabs";
import { HorariosComponent } from './horarios/horarios.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import { HorarioCulminadoComponent } from './horario-culminado/horario-culminado.component';
import { HorarioGeneralComponent } from './horario-general/horario-general.component';
import { LoginNavComponent } from './login-nav/login-nav.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { RecordatorioComponent } from './recordatorio/recordatorio.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { NoticiasComponent } from './noticias/noticias.component';



@NgModule({
  declarations: [
    AgregarComponent,
    HorariosComponent,
    HorarioCulminadoComponent,
    NoticiasComponent,




  ],
  imports: [
    CommonModule,
    NavbarComponent,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    TabladehorarioComponent,
    HorarioGeneralComponent,
    MatToolbarModule,
    LoginNavComponent,
    SnackBarComponent

  ],
  exports: [
    NavbarComponent,
    AgregarComponent,
    HorariosComponent,
    HorarioGeneralComponent,
    LoginNavComponent,
    SnackBarComponent,
    NoticiasComponent

  ]
})
export class ComponentsModule { }
