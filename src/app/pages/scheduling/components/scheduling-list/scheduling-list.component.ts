import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, map } from 'rxjs';
import { SchedulingService } from '../../services/scheduling.service';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { AddAppointmentButtonComponent } from '@app/shared/components/add-appointment-button/add-appointment-button.component';
import { LoadingComponent } from '@app/shared/components/loading/loading.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzIconModule,
    NzGridModule,
    RouterModule,
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

  enableAddingButton = false;

  constructor(
    public route: ActivatedRoute,
    private schedulingService: SchedulingService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      // this.list$ = this.schedulingService.getByDate(param.date);
      const dateToCompare = this.currentDate.toISOString().substring(0, 10);
      this.enableAddingButton =
        new Date(param.date).getTime() >= new Date(dateToCompare).getTime();

      this.eventosPorHora$ = this.schedulingService
        .getByDate(param.date)
        .pipe(map((agendamentos) => this.mapearEventosPorHora(agendamentos)));
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
      const hora = new Date(agendamento.date).getHours();
      eventosPorHora[hora] = agendamento;
    }
    return eventosPorHora;
  }

  dateCompare(date: string) {
    const toDate = new Date(date);
    return toDate.getDate() > this.currentDate.getDate();
  }

  getAppointmentClass(status: string, date: any) {
    if (status === 'Agendado' && this.dateCompare(date)) {
      return 'agendado';
    }

    if (status === 'Agendado' && !this.dateCompare(date)) {
      return 'warning';
    }

    if (status === 'Finalizado') {
      return 'past';
    }

    if (status === 'Cancelado') {
      return 'canceled';
    }
    return null;
  }
}
