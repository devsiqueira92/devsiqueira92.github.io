import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '@app/shared/services/account.service';
import { Observable } from 'rxjs';
import { Account } from './entities/account.interface';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { DrawerService } from '@app/shared/services/drawer.service';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzGridModule,
    NzDescriptionsModule,
    ButtonComponent,
    NzTableModule,
    NzIconModule,
    NzDrawerModule,
    NzTabsModule,
    RouterModule,
  ],
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.scss',
})
export class MyAccountComponent implements OnInit {
  myAccount$: Observable<Account>;
  constructor(
    private accountService: AccountService,
    public drawerService: DrawerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.myAccount$ = this.accountService.getAccount();
  }

  handleContact(id?: any) {}

  open(): void {
    this.drawerService.visibleDrawer = true;
    // this.router.navigate(['/patients/1/history/detail/3']);
  }

  close() {
    this.router.navigate(['/account']);
    this.drawerService.close();
  }
}
