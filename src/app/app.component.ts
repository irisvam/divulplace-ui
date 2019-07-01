import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'divulplace-ui';
  isMenuToggle: boolean = false;
  isLogged: boolean = false;
  
  menuToggled(evento) {
  	this.isMenuToggle = evento.toggleMenu;
  }
  
  loginAutenticado(evento){
   this.isLogged = evento.userLogged; 
  }
  
}
