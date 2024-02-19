import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Observable, delay, map, tap } from 'rxjs';
import { SchedulingService } from '../../services/scheduling.service';
import { CommonModule } from '@angular/common';
import { LinkButtonComponent } from '@app/shared/components/link-button/link-button.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { AccessControlDirective } from '@app/shared/directives/access-control.directive';
import { AddAppointmentButtonComponent } from '@app/shared/components/add-appointment-button/add-appointment-button.component';
import { LoadingComponent } from '@app/shared/components/loading/loading.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    LinkButtonComponent,
    NzCardModule,
    NzIconModule,
    NzGridModule,
    RouterModule,
    AccessControlDirective,
    AddAppointmentButtonComponent,
    LoadingComponent,
  ],
  templateUrl: './scheduling-list.component.html',
  styleUrl: './scheduling-list.component.scss',
})
export class SchedulingListComponent implements OnInit {
  list$: Observable<any>;

  eventosPorHora$: Observable<{ [hora: number]: any }>;
  horas: any[] = [];
  horaInicial = 7;
  horaFinal = 19;
  currentDate = new Date();

  constructor(
    public route: ActivatedRoute,
    private schedulingService: SchedulingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      // this.list$ = this.schedulingService.getByDate(param.date);

      this.eventosPorHora$ = this.schedulingService.getByDate(param.date).pipe(
        map((agendamentos) => this.mapearEventosPorHora(agendamentos)),
        delay(1000)
      );
    });
    this.criarDivsParaHoras();
  }

  private criarDivsParaHoras() {
    for (let i = this.horaInicial; i <= this.horaFinal; i++) {
      this.horas.push(i);
    }
  }

  private mapearEventosPorHora(agendamentos: any[]): { [hora: number]: any } {
    const eventosPorHora: { [hora: number]: any } = {};
    for (const agendamento of agendamentos) {
      const hora = agendamento.date.getHours();
      eventosPorHora[hora] = agendamento;
    }
    return eventosPorHora;
  }
}
