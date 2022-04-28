import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoute } from './app.route';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MusicModule } from '../music/music.module';
import {HashLocationStrategy , LocationStrategy, registerLocaleData} from '@angular/common';


import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MusicModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute, { relativeLinkResolution: 'legacy' }),
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
