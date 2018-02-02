import { MusicComponent } from './music.component';

export const MusicRoute = [
    {
        path: 'music',
        component: MusicComponent,
        children: [
            { path: '', redirectTo: 'discover', pathMatch: 'full' },
            { path: 'discover', loadChildren: 'music/discover/discover.module#DiscoverModule' },
            { path: 'mymusic', loadChildren: 'music/my-music/my-music.module#MyMusicModule' },
            { path: '**', redirectTo: 'discover' }
        ]

    }
];
