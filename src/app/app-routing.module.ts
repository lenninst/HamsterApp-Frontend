import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/login/login.component";
import {DashmainComponent} from "./pages/dashmain/dashmain.component";
import {TabsComponent} from "./pages/tabs/tabs.component";
import {RecordatorioComponent} from "./components/recordatorio/recordatorio.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  // dashboard
  {path: 'tabs', component: TabsComponent},
  {path: 'recordatorio', component: RecordatorioComponent},

  {path: 'login', component: LoginComponent},
  {path: 'dashboardmain', component: DashmainComponent},
  {path: '**', pathMatch: "full", redirectTo:'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
