import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from '../login/login.component';
import { SingleCategoryComponent } from '../single-category/single-category.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [{ path: '', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
