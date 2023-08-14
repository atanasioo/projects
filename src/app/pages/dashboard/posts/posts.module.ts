import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';


@NgModule({
  declarations: [
    PostsComponent,
  ],
  imports: [

    CommonModule,
    PostsRoutingModule,
    AngularFireStorageModule
  ]
})
export class PostsModule { }
