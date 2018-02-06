import { DiscoverComponent } from './discover.component';

export const DiscoverRoute = [
    {
        path: 'discover',
        component: DiscoverComponent,
        children: [
            { path: '', redirectTo: 'recommend', pathMatch: 'full' },
            { path: '**', redirectTo: 'recommend' },
            { path: 'recommend', loadChildren: 'music/discover/recommend/recommend.module#RecommendModule' },
            { path: 'toplist', loadChildren: 'music/discover/toplist/toplist.module#TopListModule' },
            { path: 'playlist', loadChildren: 'music/discover/playlist/playlist.module#PlayListModule' },
            { path: 'artist', loadChildren: 'music/discover/artist/artist.module#ArtistModule' },
            { path: 'album', loadChildren: 'music/discover/album/album.module#AlbumModule' }
        ]

    }
];
