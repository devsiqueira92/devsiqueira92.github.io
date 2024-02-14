import { Injectable, inject } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { AuthModalComponent } from '../components/modals/auth-modal/auth-modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalAuthTriggerService {
  private service = inject(NzModalService)

  create = (): NzModalRef =>
    this.service.create({
      nzContent: AuthModalComponent,
      nzFooter: null,
    });
}
