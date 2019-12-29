import { MusicComponent } from './music.component';

export const MusicRoute = [
    {
        path: 'music',
        component: MusicComponent,
        children: [
            { path: '', redirectTo: 'discover', pathMatch: 'full' },
            { path: 'discover', loadChildren: () => import('./discover/discover.module').then(m => m.DiscoverModule) },
            { path: 'mymusic', loadChildren: () => import('./my-music/my-music.module').then(m => m.MyMusicModule) },
            { path: '**', redirectTo: 'discover' }
        ]

    }
];
