import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { PaginationModule } from 'ngx-bootstrap/pagination'

import { ArtistRoute } from './artist.route';
import { ArtistComponent } from './artist.component';



@NgModule({
  declarations: [
    ArtistComponent
  ],
  imports: [
    RouterModule.forChild(ArtistRoute),
    PaginationModule.forRoot(),
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ArtistModule { }