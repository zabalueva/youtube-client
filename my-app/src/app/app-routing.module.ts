import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guard/auth.guard';
import { LoginComponent } from './auth/page/login/login.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { SearchResultsComponent } from './youtube/components/search/search-results/search-results.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
  },
  {
    path: 'youtube',
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
    component: SearchResultsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    component: LoginComponent,
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
