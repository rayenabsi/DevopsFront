import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { bloc } from './Bloc';

@Injectable({
  providedIn: 'root'
})
export class NomDuServiceService {

 
  readonly API_URL = 'http://192.168.50.4:8082/tpFoyer17/api/blocs';

  constructor(private httpClient: HttpClient) { }
  getAllbloc() {
    return this.httpClient.get(`${this.API_URL}/retrieveBlocs`)
  }
  addbloc(bloc : any) {
    return this.httpClient.post(`${this.API_URL}/addBloc`, bloc)
  }
  editbloc(bloc : any){
    return this.httpClient.put(`${this.API_URL}/update-bloc`, bloc)
  }


  
}