import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RecommendRoute } from './recommend.route';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common'; 


import { RecommendComponent } from './recommend.component';


@NgModule({
  declarations: [
    RecommendComponent
  ],
  imports: [
    RouterModule.forChild(RecommendRoute),
    CarouselModule.forRoot(),
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class RecommendModule { }