import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input('menuToggle') isMenuToggle: boolean = false;
  
  @Output() toggleMenu = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }
  
  onToggleMenu() {
    this.isMenuToggle = !this.isMenuToggle;
    this.toggleMenu.emit({toggleMenu : this.isMenuToggle});
  }

}
