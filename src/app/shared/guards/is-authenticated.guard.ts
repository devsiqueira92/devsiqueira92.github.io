import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, lastValueFrom } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { ModalAuthTriggerService } from '../services/modal-auth-trigger.service';

@Injectable({
  providedIn: 'root',
})
export class isAuthenticatedGuard implements CanActivate {
  constructor(
    private router: Router,
    private auth: AuthenticationService,
    private modalAuthTriggerService: ModalAuthTriggerService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (
      this.auth.isAuthenticated !== route.data.authDesiredValue &&
      route.data.triggerAuthModal === false
    ) {
      this.router.navigate([
        state.url === route.data.redirect ? '/' : route.data.redirect,
      ]);
      return false;
    }
    if (!this.auth.isAuthenticated && route.data.authDesiredValue) {
      return this.modalAuthTrigger();
    }

    return true;
  }

  private modalAuthTrigger = (): Promise<boolean> =>
    lastValueFrom(
      this.modalAuthTriggerService
        .create()
        .afterClose.asObservable()
        .pipe(
          map((_) => this.auth.isAuthenticated),
          tap((canActivate) => {
            /* We direct access to the route with triggerAuthModal, we don't want to stay
                     on the same page so we redirect to the home page */
            const sourceUrl = this.router.url;
            if (!canActivate && sourceUrl === '/') {
              this.router.navigate([sourceUrl]);
            }
          })
        )
    );
}
