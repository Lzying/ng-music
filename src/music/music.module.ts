import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { MusicRoute } from './music.route';
import { DiscoverModule } from './discover/discover.module';




import { MusicComponent } from './music.component';



@NgModule({
  declarations: [
    MusicComponent
  ],
  imports: [
    CommonModule,
    DiscoverModule,
    RouterModule.forChild(MusicRoute),

  ],
  providers: [],
  bootstrap: []
})
export class MusicModule { }