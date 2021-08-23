import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // {
  //   path: 'blog',
  //   loadChildren: './blogs/blogs.module#BlogModule'
  // },
  // { path: '/play/jackpot-jill-casino', redirectTo: 'google.com', pathMatch: 'full' },
  
  {
    path: '',
    loadChildren: './pages/pages.module#PagesModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
