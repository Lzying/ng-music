import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { PaginationModule } from 'ngx-bootstrap/pagination'

import { AlbumRoute } from './album.route';
import { AlbumComponent } from './album.component';



@NgModule({
  declarations: [
    AlbumComponent
  ],
  imports: [
    RouterModule.forChild(AlbumRoute),
    PaginationModule.forRoot(),
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class AlbumModule { }