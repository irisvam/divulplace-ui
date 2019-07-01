import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BsDropdownModule, CollapseModule, PopoverModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MenuNavbarComponent } from './dashboard/menu-navbar/menu-navbar.component';
import { FooterNavbarComponent } from './dashboard/footer-navbar/footer-navbar.component';
import { PainelInformativoComponent } from './painel-informativo/painel-informativo.component';
import { PainelControleComponent } from './painel-controle/painel-controle.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    MenuNavbarComponent,
    FooterNavbarComponent,
    PainelInformativoComponent,
    PainelControleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    PopoverModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
