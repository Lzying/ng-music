import { DiscoverComponent } from './discover.component';

export const DiscoverRoute = [
    {
        path: 'discover',
        component: DiscoverComponent,
        children: [
            { path: '', redirectTo: 'recommend', pathMatch: 'full' },
            { path: 'recommend', loadChildren: 'music/discover/recommend/recommend.module#RecommendModule' },
            { path: '**', redirectTo: 'recommend' }
        ]

    }
];
