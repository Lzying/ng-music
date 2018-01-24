import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MusicRoute } from './music.route';


import { MusicComponent } from './music.component';


@NgModule({
  declarations: [
    MusicComponent
  ],
  imports: [
    RouterModule.forRoot(MusicRoute)
  ],
  providers: [],
  bootstrap: []
})
export class MusicModule { }