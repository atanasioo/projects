import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';

const routes: Routes = [{ path: '', component: PostsComponent },
 { path: 'newpost', loadChildren: () => import('./new-post/new-post.module').then(m => m.NewPostModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
