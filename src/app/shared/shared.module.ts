import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor} from './interceptor/httpconfig.interceptor';
import { ErrordialogComponent } from './errordialog/errordialog.component';
import { ErrorDialogService } from './services/errordialog.service';
import { LoginService } from './services/login.service';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';

@NgModule({
  declarations: [
    ErrordialogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularMaterialModule,
  ],
  exports: [
    AngularMaterialModule
  ],
  entryComponents: [
    ErrordialogComponent
  ],
  providers: [
    LoginService,
    ErrorDialogService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ]
})
export class SharedModule { }
