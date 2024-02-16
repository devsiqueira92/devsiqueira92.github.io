import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '@app/data/user';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  USERS = Users;
  rootUrl = 'https://localhost:7263/api';
  constructor(private http: HttpClient) {}

  authenticateUser(credentials: any) {
    // return this.http.post<any>(`${this.rootUrl}/auth/login`, credentials);
    const user: any = this.USERS.find(
      (user) =>
        user.email === credentials.email &&
        user.password === credentials.password
    );
    return of(user);
  }

  registerUser(credentials: any) {
    // return this.http.post<any>(`${this.rootUrl}/user`, credentials);
    return of({
      name: 'eduardo',
      email: 'eduardo.siqueira',
      token: 'encoded_authentication_token_here',
    });
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
