import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empresa } from '../Modelo/Empresa';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {
    console.log('spotify service listo');
   }

  Url = 'localhost://localhost:8080/empresa.list';

  getEmpresas(){
    return this.http.get<Empresa[]>(this.Url);
  }
}
