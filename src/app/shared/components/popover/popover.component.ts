import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

@Component({
  selector: 'app-popover',
  standalone: true,
  imports: [NzBadgeModule, NgFor, NgIf, NzPopoverModule],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.scss',
})
export class PopoverComponent {
  @Input() item: any;

  constructor(private router: Router) {}

  editScheduling() {
    this.router.navigate(['scheduling/edit', 1]);
  }
}
