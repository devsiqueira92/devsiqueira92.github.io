import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Location } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private location: Location
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const allowedRoles = next.data.roles as Array<string>;

    let hasPermission = false;

    this.authService.token$
      .pipe(
        tap((token: any) => {
          hasPermission = allowedRoles.includes(token.accType);
        })
      )
      .subscribe();

    if (hasPermission) {
      return true;
    } else {
      // Redirect or handle unauthorized access
      console.log('Você não tem permissão para acessar está página');

      this.location.back();
      return false;
    }
  }
}
