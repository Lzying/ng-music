import { MusicComponent } from './music.component';

export const MusicRoute = [
    {
        path: 'music',
        component: MusicComponent,
        children: [
            { path: '', redirectTo: 'discover', pathMatch: 'full' },
            { path: 'discover', loadChildren: 'music/discover/discover.module#DiscoverModule' },
            { path: '**', redirectTo: 'discover' }
        ]
        
    }
];
