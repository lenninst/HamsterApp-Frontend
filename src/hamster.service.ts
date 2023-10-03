import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NoticiasInterface} from "./app/interface/NoticiasInterface";

export class HamsterService {
  baseUrl: string = 'http://localhost:3700/api/Hamster/getConstulasClass';
  baseUrlNoticia: string = 'http://localhost:3700/api/Hamster/getConsultarNoticias';

  constructor(private http: HttpClient) { }

  // mostrar noticias desde DB
  getNoticias (noticias: NoticiasInterface){
    let auth_token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : `bearer ${auth_token}`
    })
    return this.http.post(this.baseUrl, noticias, {headers: header});
  }
}
