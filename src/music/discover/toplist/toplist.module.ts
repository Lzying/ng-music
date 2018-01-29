import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { TopListRoute } from './toplist.route';


import { TopListComponent } from './toplist.component';


@NgModule({
  declarations: [
    TopListComponent
  ],
  imports: [
    RouterModule.forChild(TopListRoute),
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class TopListModule { }