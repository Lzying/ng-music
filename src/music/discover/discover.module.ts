
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DiscoverRoute } from './discover.route';

import { DiscoverComponent } from './discover.component';


@NgModule({
  declarations: [
    DiscoverComponent
  ],
  imports: [
    RouterModule.forChild(DiscoverRoute)
  ],
  providers: [],
  bootstrap: []
})
export class DiscoverModule { }