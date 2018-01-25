import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RecommendRoute } from './recommend.route';
import { CarouselModule } from 'ngx-bootstrap/carousel';


import { RecommendComponent } from './recommend.component';


@NgModule({
  declarations: [
    RecommendComponent
  ],
  imports: [
    RouterModule.forChild(RecommendRoute),
    CarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: []
})
export class RecommendModule { }