import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoute } from './app.route';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MusicModule } from '../music/music.module'


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MusicModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
