import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';
import { FuncionarioCardComponent } from './components/funcionario-card/funcionario-card.component';

@NgModule({
  imports: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FuncionariosComponent,
    FuncionarioCardComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
