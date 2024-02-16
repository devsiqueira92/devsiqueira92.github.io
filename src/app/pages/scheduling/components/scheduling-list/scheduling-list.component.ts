import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { SchedulingService } from '../../services/scheduling.service';
import { CommonModule } from '@angular/common';
import { LinkButtonComponent } from '@app/shared/components/link-button/link-button.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { AccessControlDirective } from '@app/shared/directives/access-control.directive';

@Component({
  selector: 'app-scheduling-list',
  standalone: true,
  imports: [
    CommonModule,
    LinkButtonComponent,
    NzCardModule,
    NzIconModule,
    NzGridModule,
    RouterModule,
    AccessControlDirective,
  ],
  templateUrl: './scheduling-list.component.html',
  styleUrl: './scheduling-list.component.scss',
})
export class SchedulingListComponent implements OnInit {
  list$: Observable<any>;
  constructor(
    public route: ActivatedRoute,
    private schedulingService: SchedulingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.list$ = this.schedulingService.getByDate(param.date);
    });
  }
}
