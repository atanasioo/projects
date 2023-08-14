import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsRoutingModule } from './terms-routing.module';
import { TermsComponent } from './terms.component';
import { NavbarModule } from 'src/app/navbar/navbar.module';
import { SubscriptionModule } from 'src/app/subscription/subscription.module';


@NgModule({
  declarations: [
    TermsComponent
  ],
  imports: [
    CommonModule,
    TermsRoutingModule,
    NavbarModule,
    SubscriptionModule
  ]
})
export class TermsModule { }
