import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { PopoverComponent } from '../../popover/popover.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    NzCalendarModule,
    NzBadgeModule,
    CommonModule,
    NzPopoverModule,
    PopoverComponent,
    FormsModule,
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  @Input() events: any;
  eventArr = [];
  @Output() selectDate = new EventEmitter<any>();
  date = new Date();
  selectedYear: number;
  noSchedulingAvailable = false;

  selectChange(event: any): void {
    this.selectedYear = event.getFullYear();

    this.selectDate.emit({
      date: event,
      hasSchedulingAvailable: true,
    });
  }

  hasEvent(date: any) {
    const events = this.events?.filter(
      (ev: any) =>
        new Date(ev.date).toISOString().substring(0, 10) ===
        new Date(date).toISOString().substring(0, 10)
    );
    return events;
  }
}
