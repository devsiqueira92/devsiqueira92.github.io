import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class isAuthenticatedGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthenticationService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.auth.isAuthenticated !== route.data.authDesiredValue) {
      this.router.navigate([
        state.url === route.data.redirect ? '/' : route.data.redirect,
      ]);
      return false;
    }
    if (!this.auth.isAuthenticated && route.data.authDesiredValue) {
      const sourceUrl = this.router.url;
      this.router.navigate([sourceUrl]);
    }

    return true;
  }
}
