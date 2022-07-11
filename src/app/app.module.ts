import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ImagemComponent } from './imagem/imagem.component';

import { APIService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    ImagemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
