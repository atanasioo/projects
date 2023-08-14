import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';
import { SingleCategoryComponent } from '../pages/single-category/single-category.component';

const routes: Routes = [{ path: '', component: SingleCategoryComponent }];

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    NavbarComponent,
    RouterModule
  ]
})
export class NavbarModule { }
