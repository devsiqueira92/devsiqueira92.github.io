import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LinkButtonComponent } from '@app/shared/components/link-button/link-button.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { Observable } from 'rxjs';
import { ProcedureService } from './services/procedure.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NzTableModule,
    NzDividerModule,
    LinkButtonComponent,
  ],
  templateUrl: './procedures.component.html',
  styleUrl: './procedures.component.scss',
})
export class ProceduresComponent {
  listOfData$: Observable<any>;

  constructor(private proceduresService: ProcedureService) {}

  ngOnInit(): void {
    this.listOfData$ = this.proceduresService.getList();
  }
}
