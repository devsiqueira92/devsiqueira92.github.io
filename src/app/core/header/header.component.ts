import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from '@app-shared/components/button/button.component';
import { LinkButtonComponent } from '@app/shared/components/link-button/link-button.component';
import { ModalTriggerDirective } from '@app/shared/directives/modal-trigger.directive';
import { ShowIfLoggedDirective } from '@app/shared/directives/show-if-authorized.directive';
import { ModalTriggerActionEnum } from '@app/shared/enums/modal-trigger-action.enum';
import { AuthenticationService } from '@app/shared/services/authentication.service';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonComponent,
    LinkButtonComponent,
    ShowIfLoggedDirective,
    ModalTriggerDirective,
    NzIconModule,
    NzPopoverModule,
    RouterModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  ModalTriggerActionEnum = ModalTriggerActionEnum;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
