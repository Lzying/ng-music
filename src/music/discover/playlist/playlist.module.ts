import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { PaginationModule } from 'ngx-bootstrap/pagination'

import { PlayListRoute } from './playlist.route';
import { PlayListComponent } from './playlist.component';



@NgModule({
  declarations: [
    PlayListComponent
  ],
  imports: [
    RouterModule.forChild(PlayListRoute),
    PaginationModule.forRoot(),
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class PlayListModule { }