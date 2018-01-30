import { DiscoverComponent } from './discover.component';

export const DiscoverRoute = [
    {
        path: 'discover',
        component: DiscoverComponent,
        children: [
            { path: '', redirectTo: 'recommend', pathMatch: 'full' },
            { path: 'recommend', loadChildren: './recommend/recommend.module#RecommendModule' },
            { path: 'toplist', loadChildren: './toplist/toplist.module#TopListModule' },
            { path: '**', redirectTo: 'recommend' }
        ]

    }
];
