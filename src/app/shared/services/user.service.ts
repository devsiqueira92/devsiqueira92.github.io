import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  rootUrl = 'https://localhost:7263/api';
  constructor(private http: HttpClient) {}

  authenticateUser(credentials: any) {
    // return this.http.post<any>(`${this.rootUrl}/auth/login`, credentials);
    return of({name: 'eduardo', email: 'eduardo.siqueira', token: 'encoded_authentication_token_here'})
  }

  registerUser(credentials: any) {
    // return this.http.post<any>(`${this.rootUrl}/user`, credentials);
    return of({name: 'eduardo', email: 'eduardo.siqueira', token: 'encoded_authentication_token_here'})
  }

  

  // create(credentials: User) {
  //   return this.http.post<any>(
  //     `${this.rootUrl}/user/application-user`,
  //     credentials
  //   );
  // }

  renewToken(body: any) {
    return this.http.post<any>(`${this.rootUrl}/auth`, body);
  }
}
