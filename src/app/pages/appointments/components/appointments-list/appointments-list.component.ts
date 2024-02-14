import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { AppointmentsService } from '../../services/appointments.service';
import { CommonModule } from '@angular/common';
import { LinkButtonComponent } from '@app/shared/components/link-button/link-button.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-appointments-list',
  standalone: true,
  imports: [CommonModule, LinkButtonComponent, NzCardModule, NzIconModule, NzGridModule, RouterModule],
  templateUrl: './appointments-list.component.html',
  styleUrl: './appointments-list.component.scss'
})
export class AppointmentsListComponent implements OnInit{

  list$: Observable<any>
  constructor(public route: ActivatedRoute, private appointmentsService: AppointmentsService, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.list$ = this.appointmentsService.getByDate(param.date)
    })
  }
}
