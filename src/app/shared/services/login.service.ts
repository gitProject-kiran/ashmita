import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
// import 'rxjs/operator/map';

@Injectable()
export class LoginService {
    private loggedIn = new BehaviorSubject<boolean>(false);

    constructor(private http: HttpClient) { }

    login(data): Observable<any> {
        data = { email: 'admin', password: 'admin' };
        return this.http.post('http://localhost:3000/api/login', data)
    }

    getCustomerDetails() {
        return this.http.get('http://localhost:3000/api/posts');
    }

}