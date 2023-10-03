import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UsuarioInterface } from "../../interface/UsuarioInterface";
import { AuthServices } from "../../../auth.services";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private service: AuthServices, private router: Router) {}

  usuarioTemp: any;

  usuarioLogin = new FormGroup({
    Nombre: new FormControl('', Validators.required),
    Contrasena: new FormControl('', Validators.required),
    Transaction: new FormControl()
  });

  showInvalidCredentialsAlert: boolean = false;

  login() {
    this.usuarioLogin.value.Transaction = "CONSULTAR_USUARIO_LOGIN";
   this.usuarioTemp = this.usuarioLogin.value.Nombre
      this.service.login(this.usuarioLogin.value as UsuarioInterface).subscribe(
        (data: any) => {
          if(data){
          console.log(data);
          localStorage.setItem('userName', this.usuarioTemp);
          localStorage.setItem('token_value', data);
          this.router.navigate(['tabs']);
          }else
          {
            this.showInvalidCredentialsAlert = true;
             setTimeout(() => {
               this.showInvalidCredentialsAlert = false;
            }, 5000);
          }
        }
      );


  }
}
