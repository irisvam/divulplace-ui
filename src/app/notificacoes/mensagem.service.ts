import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mensagem } from '../model/mensagem';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  private readonly API = `${environment.WS_URL}mensagens`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Mensagem[]>(this.API);
  }
}
