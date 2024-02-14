import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { Router } from '@angular/router';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [NzCalendarModule, NzBadgeModule, CommonModule, NzPopoverModule, PopoverComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})

export class CalendarComponent implements OnInit {
  @Input() events: any;
  @Output() selectDate = new EventEmitter<any>();

  selectedYear: number;
  noAppointmentsAvailable = false;

  
  constructor(private router: Router) {}
  ngOnInit(): void {
    console.log(this.events)
  }

  displayEvent(eventDay: any, date: any) {
    return (eventDay.date.getDate() === date.getDate() && 
    (eventDay.date.getMonth() === date.getMonth()) && 
    (eventDay.date.getYear() === date.getYear()))
  }
  
  getEvents(index: any, event: any) {
    return event;
  }

  getMonthEvents(month: Date) {
    return this.events.filter((value: any) => {
      return (value.date.getMonth() === month.getMonth()) && (value.date.getFullYear() === this.selectedYear);
    });
  }

  panelChange(change: { date: Date; mode: string }): void {
    this.selectedYear = change.date.getFullYear();
  }

  selectChange(event: any): void {
    this.selectedYear = event.getFullYear();
    const hasAvailability = this.events.filter((ev:any) => 
      new Date(ev.date).toISOString().substring(0, 10) === new Date(event).toISOString().substring(0, 10)
    ).length < 2;

    this.selectDate.emit({date: event, hasAppointmentAvailable: hasAvailability})
  }

  edit(event: any) {
    this.router.navigate(['/appointments/edit', event.id])
  }

  hasEvent(date: any) {
    const events = this.events.filter((ev:any) => 
      new Date(ev.date).toISOString().substring(0, 10) === new Date(date).toISOString().substring(0, 10)
    );

    return events 
  }
}
