import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinglePostRoutingModule } from './single-post-routing.module';
import { SinglePostComponent } from './single-post.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { PostcardModule } from 'src/app/postcard/postcard.module';
import { NavbarModule } from 'src/app/navbar/navbar.module';
import { SubscriptionModule } from 'src/app/subscription/subscription.module';




@NgModule({
  declarations: [
    SinglePostComponent,
    CommentListComponent,
    CommentFormComponent,
  ],
  imports: [
    CommonModule,
    SinglePostRoutingModule,
    PostcardModule,
    NavbarModule,
    SubscriptionModule
  ]
})
export class SinglePostModule { }
