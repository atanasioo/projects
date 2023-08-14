import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategorieseditRoutingModule } from './categoriesedit-routing.module';
import { CategorieseditComponent } from './categoriesedit.component';


@NgModule({
  declarations: [
    CategorieseditComponent
  ],
  imports: [
    CommonModule,
    CategorieseditRoutingModule,
    FormsModule
  ]
})
export class CategorieseditModule { }
