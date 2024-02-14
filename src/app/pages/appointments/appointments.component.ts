import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CalendarComponent } from '@app/shared/components/calendar/calendar.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { AppointmentsService } from './services/appointments.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LinkButtonComponent } from '@app/shared/components/link-button/link-button.component';

@Component({
  standalone: true,
  imports: [RouterOutlet, CalendarComponent, NzGridModule, CommonModule, LinkButtonComponent],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss'
})
export class AppointmentsComponent implements OnInit{
  events$: Observable<any>
  noAppointmentsAvailable = false;
  constructor(private router: Router, private appointmentsService: AppointmentsService) {}
  
  ngOnInit(): void {
    this.events$ = this.appointmentsService.getList()
    const date = new Date().toISOString().substring(0, 10);
    this.router.navigate(['appointments/list', date]);
  }

  getAppointmentsOnSelectedDate(event: any) {
    const date = event.date.toISOString().substring(0, 10);
    this.noAppointmentsAvailable = event.hasAppointmentAvailable;
    
    this.router.navigate(['appointments/list', date]);
  }
}
