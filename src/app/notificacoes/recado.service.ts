import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Recado } from '../model/recado';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecadoService {
  
  private readonly API = `${environment.WS_URL}recados`;
  
  constructor(private http: HttpClient) { }
  
  list(){
    return this.http.get<Recado[]>(this.API);
  }
}
