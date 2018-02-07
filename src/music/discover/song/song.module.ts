import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { PaginationModule } from 'ngx-bootstrap/pagination'

import { SongRoute } from './song.route';
import { SongComponent } from './song.component';



@NgModule({
  declarations: [
    SongComponent
  ],
  imports: [
    RouterModule.forChild(SongRoute),
    PaginationModule.forRoot(),
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class SongModule { }