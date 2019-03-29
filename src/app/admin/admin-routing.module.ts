import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from 'src/app/admin/main-page/main-page.component';
import { DashboardComponent } from 'src/app/admin/dashboard/dashboard.component';

const routes: Routes = [{
  path:  '',
  component:  MainPageComponent,
  children: [
  {
  path:  '',
  component:  DashboardComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
