import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentDateService } from '@app/shared/services/appointment-date.service';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-add-appointment-button',
  standalone: true,
  imports: [NzIconModule],
  templateUrl: './add-appointment-button.component.html',
  styleUrl: './add-appointment-button.component.scss',
})
export class AddAppointmentButtonComponent {
  @Input() time: any;
  currentDate = new Date();
  selectedDate: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appointmentDate: AppointmentDateService
  ) {}

  newAppointment(hora: number) {
    this.selectedDate = this.route.snapshot.paramMap.get('date');

    const dateWithTime = new Date(`${this.selectedDate}, ${hora}:00`);
    console.log(dateWithTime);

    this.appointmentDate.setDate(dateWithTime);
    this.router.navigate(['/scheduling/create']);
  }
}
