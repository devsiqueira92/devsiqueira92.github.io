import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { filter, map, tap } from 'rxjs/operators';
import { SubSink } from 'subsink';
import { AuthenticationService } from '../services/authentication.service';

@Directive({
  standalone:true,
  selector: '[appShowIfLogged]',
})
export class ShowIfLoggedDirective implements OnInit, OnDestroy {
  @Input('appShowIfLogged') authDesiredValue? = true;

  private subs = new SubSink();
  private initialDisplay: string;
  constructor(private el: ElementRef, private auth: AuthenticationService) {}

  ngOnInit() {
    this.initialDisplay = this.el.nativeElement.style.display;
    this.subs.sink = this.auth.token$
      .pipe(
        tap(
          (clientAccount) =>
            (this.el.nativeElement.style.display =
              Boolean(clientAccount) === this.authDesiredValue
                ? this.initialDisplay
                : 'none')
        ),
        filter((clientAccount) => Boolean(clientAccount)),
        map((clientAccount) => {
          // ClientAccount status cannot be found in the array of authorized statuses
          // if (
          //     this.andStatus &&
          //     this.andStatus.indexOf(clientAccount?.status as TgtradedClientAccountStatus) === -1
          // ) {
          //     this.el.nativeElement.style.display = 'none';
          // }
          /*  ClientAccount verification status cannot be found in the array of authorized
                   verification statuses */
          // if (
          //     this.andVerificationStatus &&
          //     this.andVerificationStatus.indexOf(
          //         clientAccount?.verificationStatus as ClientAccountVerificationStatus
          //     ) === -1
          // ) {
          //     this.el.nativeElement.style.display = 'none';
          // }
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.auth.token$.unsubscribe();
  }
}
