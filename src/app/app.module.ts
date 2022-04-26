import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoute } from './app.route';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MusicModule } from '../music/music.module';
import {HashLocationStrategy , LocationStrategy} from '@angular/common';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MusicModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute, { relativeLinkResolution: 'legacy' }),
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
