import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '@app/shared/services/account.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.scss'
})
export class MyAccountComponent implements OnInit {

  myAccount$: Observable<any>

  constructor(private accountService: AccountService) {

  }
  
  ngOnInit(): void {
    this.myAccount$ = this.accountService.getAccount()
  }
  
}
