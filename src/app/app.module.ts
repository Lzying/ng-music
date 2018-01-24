import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoute } from './app.route';
import { RouterModule } from '@angular/router';
import { MusicModule } from '../music/music.module'


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MusicModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
