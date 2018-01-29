import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyMusicRoute } from './my-music.route';


import { MyMusicComponent } from './my-music.component';


@NgModule({
  declarations: [
    MyMusicComponent
  ],
  imports: [
    RouterModule.forChild(MyMusicRoute)
  ],
  providers: [],
  bootstrap: []
})
export class MyMusicModule { }