import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CalendarComponent } from '@app/shared/components/forms/calendar/calendar.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SchedulingService } from './services/scheduling.service';
import { Observable, delay, filter, map, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LinkButtonComponent } from '@app/shared/components/link-button/link-button.component';
import { LoadingComponent } from '@app/shared/components/loading/loading.component';

@Component({
  standalone: true,
  imports: [
    RouterOutlet,
    CalendarComponent,
    NzGridModule,
    CommonModule,
    LinkButtonComponent,
    LoadingComponent,
  ],
  templateUrl: './scheduling.component.html',
  styleUrl: './scheduling.component.scss',
})
export class SchedulingComponent implements OnInit {
  events$: Observable<any>;
  noSchedulingAvailable = false;

  currentMonth = new Date().getMonth() + 1;
  currentYear = new Date().getFullYear();
  loading = false;
  constructor(
    private router: Router,
    private schedulingService: SchedulingService
  ) {}

  ngOnInit(): void {
    this.refreshEvents();
    // this.events$ = this.schedulingService.getList();

    // const date = new Date().toISOString().substring(0, 10);
    // this.router.navigate(['scheduling/list', date]);
  }

  getSchedulingOnSelectedDate(event: any) {
    if (event.date.getMonth() + 1 !== this.currentMonth) {
      this.currentMonth = event.date.getMonth() + 1;
      this.currentYear = event.date.getFullYear();

      this.refreshEvents();
    }

    const date = event.date.toISOString().substring(0, 10);
    this.router.navigate(['scheduling/list', date]);
  }

  private refreshEvents() {
    this.events$ = this.schedulingService
      .getEventsFromMonthYear(this.currentMonth, this.currentYear)
      .pipe(tap(() => (this.loading = false)));
  }
}
