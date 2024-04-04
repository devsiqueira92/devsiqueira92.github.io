import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map, take, tap } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AccountTypeGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthenticationService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.auth.isAuthenticated === route.data.authDesiredValue) {
      return this.auth.token$.pipe(
        take(1), // Subscreve apenas uma vez e cancela automaticamente
        map((token: any) => {
          if (token.isRegistred !== 'True') {
            const path = token.accType.toLowerCase();
            return this.router.createUrlTree([`/onboarding/${path}`]);
          } else {
            return true;
          }
        })
      );
    }

    return true;
  }
}
