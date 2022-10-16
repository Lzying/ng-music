import { Routes } from '@angular/router';
export const appRoute: Routes = [
    { path: '', redirectTo: 'music', pathMatch: 'full' },
    { path: '**', redirectTo: 'music/discover' },
];
