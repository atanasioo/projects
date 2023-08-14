import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleCategoryRoutingModule } from './single-category-routing.module';
import { SingleCategoryComponent } from './single-category.component';
import { PostcardModule } from 'src/app/postcard/postcard.module';
import { NavbarModule } from 'src/app/navbar/navbar.module';
import { SubscriptionModule } from 'src/app/subscription/subscription.module';


@NgModule({
  declarations: [
    SingleCategoryComponent,

  ],
  imports: [
    CommonModule,
    SingleCategoryRoutingModule,
    PostcardModule,
    NavbarModule,
    SubscriptionModule
  ]
})
export class SingleCategoryModule { }
