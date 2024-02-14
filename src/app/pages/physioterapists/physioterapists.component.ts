import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LinkButtonComponent } from '@app/shared/components/link-button/link-button.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { Observable } from 'rxjs';
import { PhysioterapistService } from './services/physioterapist.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, NzTableModule, NzDividerModule, LinkButtonComponent],
  templateUrl: './physioterapists.component.html',
  styleUrl: './physioterapists.component.scss'
})
export class PhysioterapistsComponent {

  listOfData$: Observable<any>;

  constructor(private physioterapistService: PhysioterapistService) {}

  ngOnInit(): void {
    this.listOfData$ = this.physioterapistService.getList()
  }
}
