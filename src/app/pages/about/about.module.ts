import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { NavbarModule } from 'src/app/navbar/navbar.module';
import { SubscriptionModule } from 'src/app/subscription/subscription.module';



@NgModule({
  declarations: [
    AboutComponent,
    
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    NavbarModule,
    SubscriptionModule
  ]
})
export class AboutModule { }
