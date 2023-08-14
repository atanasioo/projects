import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionComponent } from './subscription/subscription.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SubscriptionComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SubscriptionComponent
  ]
})
export class SubscriptionModule { }
