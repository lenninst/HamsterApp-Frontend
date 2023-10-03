import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UsuarioInterface} from "./app/interface/UsuarioInterface";

@Injectable({
  providedIn: 'root'
})
export class AuthServices {
 // baseUrl: string = 'http://localhost:3700/api/Login/GetLogin';
  baseUrl: string = 'https://localhost:7006/api/Login/getUsuario';
  constructor(private http: HttpClient) {  }
  login(user: UsuarioInterface){
    return this.http.post(this.baseUrl,user);
  }

  get getUsername(){
    return localStorage.getItem('username');
  }
  get isAUtenticado(){
    return !!localStorage.getItem('token_value')
  }
}
