import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';



@NgModule({
  declarations: [
    DashboardComponent,
 
  ],
  imports: [
 
    CommonModule,
    DashboardRoutingModule,
    AngularFireStorageModule
  ]
})
export class DashboardModule { }
