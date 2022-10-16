import { DiscoverComponent } from './discover.component';
import { TopListComponent } from './toplist/toplist.component';
import { SongComponent } from './song/song.component';
import { RecommendComponent } from './recommend/recommend.component';
import { PlayListComponent } from './playlist/playlist.component';
import { ArtistInformationComponent } from './artist-information/artist-information.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './album/album.component';
import { Routes } from '@angular/router';

export const DiscoverRoute: Routes = [
    {
        path: '',
        component: DiscoverComponent,
        children: [
            { path: '', redirectTo: 'recommend', pathMatch: 'full' },
            { path: 'recommend', component: RecommendComponent },
            { path: 'toplist', component: TopListComponent },
            { path: 'playlist', component: PlayListComponent },
            { path: 'artist', component: ArtistComponent },
            { path: 'album', component: AlbumComponent },
            { path: 'albums', component: AlbumsComponent },
            { path: 'song', component: SongComponent },
            { path: 'artistInformation', component: ArtistInformationComponent },
            { path: '**', redirectTo: 'recommend' }
        ]

    }
];
