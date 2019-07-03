import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule, CollapseModule, PopoverModule } from 'ngx-bootstrap';

import { NotificacoesModule } from './notificacoes/notificacoes.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ControlNavbarComponent } from './dashboard/control-navbar/control-navbar.component';
import { FooterNavbarComponent } from './dashboard/footer-navbar/footer-navbar.component';
import { PainelInformativoComponent } from './painel-informativo/painel-informativo.component';
import { PainelControleComponent } from './painel-controle/painel-controle.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ControlNavbarComponent,
    FooterNavbarComponent,
    PainelInformativoComponent,
    PainelControleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    PopoverModule.forRoot(),
    HttpClientModule,
    NotificacoesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
