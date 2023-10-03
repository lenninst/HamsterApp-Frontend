import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbTypeahead} from "@ng-bootstrap/ng-bootstrap";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { DashmainComponent } from './dashmain/dashmain.component';
import {RouterLink} from "@angular/router";
import {MatNativeDateModule} from "@angular/material/core";

import {MatTabsModule} from "@angular/material/tabs";
import {ComponentsModule} from "../components/components.module";

import {TabsComponent} from "./tabs/tabs.component";
import {CalificacionesComponent} from "../components/calificaciones/calificaciones.component";
import {AsistenciaComponent} from "../components/asistencia/asistencia.component";
import {MatIconModule} from "@angular/material/icon";
import {NavbarComponent} from "../components/navbar/navbar.component";
import {LoginNavComponent} from "../components/login-nav/login-nav.component";




@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    TabsComponent,
    CalificacionesComponent,
    AsistenciaComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbTypeahead,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
    DashmainComponent,
    MatNativeDateModule,
    MatTabsModule,

    MatIconModule,
    NavbarComponent,
    LoginNavComponent,
    ComponentsModule,


  ],
  exports: [
    LoginComponent,


  ]
})
export class PagesModule { }
