import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { PaginationModule } from 'ngx-bootstrap/pagination'

import { ArtistInformationRoute } from './artist-information.route';
import { ArtistInformationComponent } from './artist-information.component';



@NgModule({
  declarations: [
    ArtistInformationComponent
  ],
  imports: [
    RouterModule.forChild(ArtistInformationRoute),
    PaginationModule.forRoot(),
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ArtistInformationModule { }