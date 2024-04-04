import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LinkButtonComponent } from '@app/shared/components/link-button/link-button.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { Observable } from 'rxjs';
import { PhysioterapistService } from './services/physioterapist.service';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ClinicProfessionalService } from '@app/shared/services/clinic-professional.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NzTableModule,
    NzDividerModule,
    LinkButtonComponent,
    NzIconModule,
  ],
  templateUrl: './physioterapists.component.html',
  styleUrl: './physioterapists.component.scss',
})
export class PhysioterapistsComponent {
  listOfData$: Observable<any>;

  constructor(
    private physioterapistService: PhysioterapistService,
    private clinicProfessionalService: ClinicProfessionalService
  ) {}

  ngOnInit(): void {
    this.listOfData$ = this.clinicProfessionalService.getList();
  }
}
