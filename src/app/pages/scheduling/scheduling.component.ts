import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CalendarComponent } from '@app/shared/components/forms/calendar/calendar.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SchedulingService } from './services/scheduling.service';
import { Observable, filter, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LinkButtonComponent } from '@app/shared/components/link-button/link-button.component';

@Component({
  standalone: true,
  imports: [
    RouterOutlet,
    CalendarComponent,
    NzGridModule,
    CommonModule,
    LinkButtonComponent,
  ],
  templateUrl: './scheduling.component.html',
  styleUrl: './scheduling.component.scss',
})
export class SchedulingComponent implements OnInit {
  events$: Observable<any>;
  noSchedulingAvailable = false;

  constructor(
    private router: Router,
    private schedulingService: SchedulingService
  ) {}

  ngOnInit(): void {
    this.events$ = this.schedulingService.getList();

    const date = new Date().toISOString().substring(0, 10);
    this.router.navigate(['scheduling/list', date]);
  }

  getSchedulingOnSelectedDate(event: any) {
    const date = event.date.toISOString().substring(0, 10);
    this.noSchedulingAvailable = event.hasSchedulingAvailable;

    this.router.navigate(['scheduling/list', date]);
  }
}
