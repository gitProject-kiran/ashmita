import { Component } from '@angular/core';
import { LoginService } from './shared/services/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: Object;
  title = 'demo';

  constructor(public loginService: LoginService) {
    this.loginService.login({ email: 'admin', password: 'admin' }).subscribe(
      data => {
        console.log("Success", data);
        localStorage.setItem('token', data['token'])
      }, error => {
        console.log("Success", error);
      });
  }

  getCustomerDetails() {
    this.loginService.getCustomerDetails().subscribe((data) => {
      console.log('----->>>', data);
      this.data = data;
    });
  }
}
