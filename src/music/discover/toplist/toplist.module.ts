import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { TopListRoute } from './toplist.route';
import { PaginationModule } from 'ngx-bootstrap/pagination'
import { CommendModule } from '../../../sha/component';

import { TopListComponent } from './toplist.component';



@NgModule({
  declarations: [
    TopListComponent
  ],
  imports: [
    RouterModule.forChild(TopListRoute),
    PaginationModule.forRoot(),
    FormsModule,
    CommonModule,
    CommendModule
  ],
  providers: [],
  bootstrap: []
})
export class TopListModule { }