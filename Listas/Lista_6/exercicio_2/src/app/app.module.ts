import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/views/home/home.component';
import { AdicionarProdutoComponent } from './components/views/produto/adicionar-produto/adicionar-produto.component';
import { ListagemProdutoComponent } from './components/views/produto/listagem-produto/listagem-produto.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SubMenuComponent } from './components/shared/sub-menu/sub-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdicionarProdutoComponent,
    ListagemProdutoComponent,
    NavbarComponent,
    SubMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
