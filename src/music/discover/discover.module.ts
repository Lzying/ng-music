import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DiscoverRoute } from './discover.route';

import { RecommendModule } from './recommend/recommend.module';
import { TopListModule } from './toplist/toplist.module';
import { PlayListModule } from './playlist/playlist.module';
import { ArtistModule } from './artist/artist.module';
import { AlbumModule } from './album/album.module';

import { DiscoverComponent } from './discover.component';


@NgModule({
  declarations: [
    DiscoverComponent
  ],
  imports: [
    RecommendModule,
    TopListModule,
    PlayListModule,
    ArtistModule,
    AlbumModule,
    RouterModule.forChild(DiscoverRoute)
  ],
  providers: [],
  bootstrap: []
})
export class DiscoverModule { }