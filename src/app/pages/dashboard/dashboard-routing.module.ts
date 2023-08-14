import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { authGuard } from 'src/app/services/auth.guard';

const routes: Routes = [
{ path: '', component: DashboardComponent , canActivate : [authGuard]},
{ path: 'categoriesedit', loadChildren: () => import('./categoriesedit/categoriesedit.module').then(m => m.CategorieseditModule), canActivate : [authGuard]},
{ path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule), canActivate : [authGuard] },
{ path: 'subscribers', loadChildren: () => import('./subscribers/subscribers.module').then(m => m.SubscribersModule) , canActivate : [authGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
