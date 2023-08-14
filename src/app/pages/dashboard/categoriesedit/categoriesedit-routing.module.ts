import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieseditComponent } from './categoriesedit.component';

const routes: Routes = [{ path: '', component: CategorieseditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorieseditRoutingModule { }
