import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DiscoverRoute } from './discover.route';

import { RecommendModule } from './recommend/recommend.module';
import { TopListModule } from './toplist/toplist.module';
import { PlayListModule } from './playlist/playlist.module';
import { ArtistModule } from './artist/artist.module';
import { AlbumModule } from './album/album.module';
import { SongModule } from './song/song.module';//具体内容，测试写法
import { Album_Module } from './album_/album_.module';//具体内容，测试写法

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
    Album_Module,
    SongModule,
    RouterModule.forChild(DiscoverRoute)
  ],
  providers: [],
  bootstrap: []
})
export class DiscoverModule { }