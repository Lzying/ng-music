import { MusicComponent } from './music.component';
import { Routes } from '@angular/router';


export const MusicRoute: Routes = [
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
