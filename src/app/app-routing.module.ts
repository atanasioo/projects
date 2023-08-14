import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
{ path: 'category/:category', loadChildren: () => import('./pages/single-category/single-category.module').then(m => m.SingleCategoryModule) },
{ path: 'post/:id', loadChildren: () => import('./pages/single-post/single-post.module').then(m => m.SinglePostModule) },
{ path: 'terms', loadChildren: () => import('./pages/terms/terms.module').then(m => m.TermsModule) },
{ path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
{ path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
{ path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
{ path: 'error', loadChildren: () => import('./pages/error/error.module').then(m => m.ErrorModule) },
{ path: '**', loadChildren: () => import('./pages/error/error.module').then(m => m.ErrorModule) },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
