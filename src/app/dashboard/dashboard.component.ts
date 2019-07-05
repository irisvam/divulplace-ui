import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecadoService } from '../notificacoes/recado.service';
import { Recado } from '../model/recado';
import { MensagemService } from '../notificacoes/mensagem.service';
import { Mensagem } from '../model/mensagem';
import { Observable, empty } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input('menuToggle') isMenuToggle: boolean = false;
  
  @Output() toggleMenu = new EventEmitter();

  qtdeRecado: number;
  recados$: Observable<Recado[]>;

  qtdeMensagem: number;
  mensagens$: Observable<Mensagem[]>;
  
  constructor(
    private serviceRecado: RecadoService,
    private serviceMensagem: MensagemService) { }

  ngOnInit() {
    this.onAtualizarRecados();
    this.onAtualizarMensagens();
  }

  onAtualizarRecados() {
    this.recados$ = this.serviceRecado.list().pipe(
      tap(dados => this.qtdeRecado = dados.length),
      catchError(error => {
        console.error(error);
        return empty();
      })
    );

    return false;
  }

  onAtualizarMensagens() {
    this.mensagens$ = this.serviceMensagem.list().pipe(
      tap(dados => this.qtdeMensagem = dados.length),
      catchError(error => {
        console.error(error);
        return empty();
      })
    );

    return false;
  }
  
  onToggleMenu() {
    this.isMenuToggle = !this.isMenuToggle;
    this.toggleMenu.emit({toggleMenu : this.isMenuToggle});
  }

}
