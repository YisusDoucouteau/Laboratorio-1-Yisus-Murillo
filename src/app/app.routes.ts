import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout';
import { HomeComponent } from './home/home';
import { NotFoundComponent } from './not-found/not-found';

export const routes: Routes = [
  { path: '', component: LayoutComponent, 
    children: [
    { path: '', component: HomeComponent },
  ]},
  { path: '**', component: NotFoundComponent },
];
