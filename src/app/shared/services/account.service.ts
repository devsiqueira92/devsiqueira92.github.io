import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Clinics } from '@app/data/clinic';
import { Observable, map, of, switchMap, tap } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { Token } from '../interfaces/token.interface';
import { environment } from '@root/src/environments/environment';
import { Account } from '@app/pages/my-account/entities/account.interface';
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(
    private httpCliente: HttpClient,
    private authenticationService: AuthenticationService
  ) {}

  getAccount(): Observable<Account> {
    return this.authenticationService.token$.pipe(
      map((token: Token | null) => token!.accType),
      switchMap((accType: string) =>
        this.httpCliente.get<Account>(
          `${environment.baseUrl}/${accType}/account`
        )
      )
    );
  }
}
