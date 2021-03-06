import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
//import { RankingComponent } from './components/ranking/ranking.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Error404Component } from './components/error404/error404.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//import { RankingModule } from './components/ranking/ranking.module';

import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    //RankingComponent,
    HeaderComponent,
    FooterComponent,
    Error404Component,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    //RankingModule
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }