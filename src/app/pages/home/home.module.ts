import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PostcardModule } from 'src/app/postcard/postcard.module';
import { NavbarModule } from 'src/app/navbar/navbar.module';
import { SubscriptionModule } from 'src/app/subscription/subscription.module';




@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PostcardModule,
    NavbarModule,
    SubscriptionModule
  ]
})
export class HomeModule { }
