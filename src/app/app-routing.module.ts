import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ 
  { path: 'login', loadChildren: './authentication/authentication.module#AuthenticationModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
