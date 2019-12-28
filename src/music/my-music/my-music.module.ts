import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyMusicRoute } from './my-music.route';
import { HttpClientModule } from '@angular/common/http';

import { MyMusicComponent } from './my-music.component';


@NgModule({
  declarations: [
    MyMusicComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forChild(MyMusicRoute)
  ],
  providers: [],
  bootstrap: []
})
export class MyMusicModule { }
