import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { UserService } from './user.service';
import { autoBind } from '../helpers/autobind.decorator';
import { SubSink } from 'subsink';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Login } from '../interfaces/login.interface';
import { RegisterForm } from '../interfaces/register-form.interface';
import { Token } from '../interfaces/token.interface';

/* eslint-enable */
const TOKEN_KEY = 'authorization';
const TOKEN_RENEW_DELAY_OFFSET = 5000; // 5 sec

export function tokenGetter(): string {
  return sessionStorage.getItem(TOKEN_KEY) as string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  authenticated$ = new BehaviorSubject<boolean | null>(null);
  // token$ = new BehaviorSubject<Token | null>(null);
  token$ = new BehaviorSubject<Token | null>(null);
  private subs = new SubSink();

  constructor(
    private userService: UserService,
    private jwtHelper: JwtHelperService
  ) {
    if (this.isAuthenticated) {
      this.fetchUserInfo();
      // this.subs.sink = this.setupTokenRenewalSubscription(tokenGetter());
      this.token$.next(this.decodeToken(tokenGetter()));
    }
  }

  private fetchUserInfo(): void {
    // this.clientApi
    //   .getMyClientAccount()
    //   .pipe(
    //     map((res: any) => res),
    //     tap((user) => this.clientAccount$.next(user)),
    //     tap((user) => (this.isApproved = user !== null))
    //   )
    //   .subscribe();
  }
  register(registerInput: RegisterForm) {
    return this.userService.registerUser(registerInput).pipe(
      map((r) => r.token as string),
      tap(this.authenticateLocally),
      tap((_) => {
        this.fetchUserInfo();
        // this.subs.sink = this.setupTokenRenewalSubscription(tokenGetter());
      })
    );
  }

  login(loginInput: Login) {
    return this.userService.authenticateUser(loginInput).pipe(
      map((r) => r.token as string),
      tap(this.authenticateLocally),
      tap((_) => {
        this.fetchUserInfo();
        // this.subs.sink = this.setupTokenRenewalSubscription(tokenGetter());
      })
    );
  }

  @autoBind()
  authenticateLocally(token: string): void {
    this.storeToken(token);
  }

  storeToken(token: string): void {
    // this.configuration.apiKeys = {
    //     Authorization: `bearer ${token}`,
    // };
    sessionStorage.setItem(TOKEN_KEY, token);
    this.token$.next(this.decodeToken(token));
  }

  // private decodeToken(token: string): Token | null {
  private decodeToken(token: string): Token | null {
    if (token) {
      return this.jwtHelper.decodeToken(token);
    }
    return null;
  }

  get isAuthenticated(): boolean {
    const token = tokenGetter();
    if (token) {
      return !this.jwtHelper.isTokenExpired(token);
    }
    return false;
  }

  logout(): void {
    sessionStorage.removeItem(TOKEN_KEY);
    // this.clientAccount$.next(null);
    this.token$.next(null);
    // this.redirectFromRestricedPage();
    this.subs.unsubscribe();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
