import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { filter, map, tap } from 'rxjs/operators';
import { SubSink } from 'subsink';
import { AuthenticationService } from '../services/authentication.service';

@Directive({
  standalone: true,
  selector: '[accessControl]',
})
export class AccessControlDirective implements OnInit, OnDestroy {
  @Input('moduleType') moduleType: string;

  private subs = new SubSink();
  private initialDisplay: string;
  constructor(private el: ElementRef, private auth: AuthenticationService) {}

  ngOnInit() {
    this.initialDisplay = this.el.nativeElement.style.display;

    this.subs.sink = this.auth.token$
      .pipe(
        tap((token) => {
          this.el.nativeElement.style.display =
            token === this.moduleType ? this.initialDisplay : 'none';
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    // console.log('object destroyed');
    // this.auth.token$.unsubscribe();
  }
}
