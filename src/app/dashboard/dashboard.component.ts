import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecadoService } from '../notificacoes/recado.service';
import { Recado } from '../model/recado';
import { MensagemService } from '../notificacoes/mensagem.service';
import { Mensagem } from '../model/mensagem';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input('menuToggle') isMenuToggle: boolean = false;
  
  @Output() toggleMenu = new EventEmitter();

  recados$: Observable<Recado[]>;
  mensagens$: Observable<Mensagem[]>;
  
  constructor(
    private serviceRecado: RecadoService,
    private serviceMensagem: MensagemService) { }

  ngOnInit() {

    this.recados$ = this.serviceRecado.list();
    this.mensagens$ = this.serviceMensagem.list();
  }
  
  onToggleMenu() {
    this.isMenuToggle = !this.isMenuToggle;
    this.toggleMenu.emit({toggleMenu : this.isMenuToggle});
  }

}
