import { Directive, HostListener, Input, OnDestroy, inject } from '@angular/core';
import { SubSink } from 'subsink';
// import { ChangePasswordComponent } from '../components/forms/change-password/change-password.component';
// import { DeleteModalComponent } from '../components/modals/delete-modal/delete-modal.component';
// import { RegisterModalComponent } from '../components/modals/register-modal/register-modal.component';
import { ModalTriggerActionEnum } from '../enums/modal-trigger-action.enum';
import { ModalAuthTriggerService } from '../services/modal-auth-trigger.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AuthModalComponent } from '../components/modals/auth-modal/auth-modal.component';
// import { ModalAuthTriggerService } from '../services/modal-auth-trigger.service';

@Directive({
  standalone: true,
  selector: '[appModalTrigger]',
})
export class ModalTriggerDirective implements OnDestroy {
  private subs = new SubSink();

  @Input('appModalTrigger') action: ModalTriggerActionEnum =
    ModalTriggerActionEnum.Default;

  /* eslint-disable complexity */
  @HostListener('click', ['$event']) showEntryModal(_: MouseEvent): void {
    switch (this.action) {

      case ModalTriggerActionEnum.Auth:
        this.triggerModalAuth();
        break;

      case ModalTriggerActionEnum.ChangePassword:
        break;

      case ModalTriggerActionEnum.Register:
        // this.triggerRegisterModal();
        break;


      default:
        throw new Error(
          'An action of type ModalTriggerActionEnum should be added with this directive'
        );
    }
  }
  /* es-lint enable */

  constructor(
    private modalService: NzModalService,
    private modalAuthTriggerService: ModalAuthTriggerService
  ) {}


  private triggerModalAuth() {
    this.modalAuthTriggerService.create();
  }

  // private triggerModalChangePassword() {
  //   this.modalService.create({
  //     nzContent: ChangePasswordComponent,
  //   });
  // }

  // private triggerRegisterModal() {
  //   this.modalService.create({
  //     nzContent: RegisterModalComponent,
  //     nzFooter: null,
  //   });
  //}


  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
