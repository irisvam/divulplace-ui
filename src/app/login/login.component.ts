import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged: boolean = false;
  
  @Output() userAutenticado = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }
  
  autenticar() {
  	this.isLogged = !this.isLogged;
  	this.userAutenticado.emit({userLogged : this.isLogged});
  }

}
