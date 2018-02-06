import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { PaginationModule } from 'ngx-bootstrap/pagination'

import { Album_Route } from './album_.route';
import { Album_Component } from './album_.component';



@NgModule({
  declarations: [
    Album_Component
  ],
  imports: [
    RouterModule.forChild(Album_Route),
    PaginationModule.forRoot(),
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class Album_Module { }