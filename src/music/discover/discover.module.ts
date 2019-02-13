import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DiscoverRoute } from './discover.route';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DiscoverComponent } from './discover.component';

import { TopListComponent } from './toplist/toplist.component';
import { SongComponent } from './song/song.component';
import { RecommendComponent } from './recommend/recommend.component';
import { PlayListComponent } from './playlist/playlist.component';
import { ArtistInformationComponent } from './artist-information/artist-information.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './album/album.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CommendModule } from '../../sha/component';
@NgModule({
  declarations: [
    DiscoverComponent,
    TopListComponent,
    SongComponent,
    RecommendComponent,
    PlayListComponent,
    ArtistInformationComponent,
    ArtistComponent,
    AlbumComponent,
    AlbumsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    CarouselModule,
    PaginationModule,
    CommendModule,
    RouterModule.forChild(DiscoverRoute)
  ],
  providers: [],
  bootstrap: []
})
export class DiscoverModule { }
