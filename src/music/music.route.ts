import { MusicComponent } from './music.component';

export const MusicRoute = [
    {
        path: 'music',
        component: MusicComponent,
        children: [
            { path: '', redirectTo: 'discover', pathMatch: 'full' },
            { path: 'discover', loadChildren: () => import('music/discover/discover.module').then(m => m.DiscoverModule) },
            { path: 'mymusic', loadChildren: () => import('music/my-music/my-music.module').then(m => m.MyMusicModule) },
            { path: '**', redirectTo: 'discover' }
        ]

    }
];
