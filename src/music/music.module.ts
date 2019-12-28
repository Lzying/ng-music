import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MusicRoute } from './music.route';
import { MusicComponent } from './music.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MusicComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule.forChild(MusicRoute),

  ],
  providers: [],
  bootstrap: []
})
export class MusicModule { }
