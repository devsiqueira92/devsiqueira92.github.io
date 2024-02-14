import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NzButtonModule, NzIconModule, NgIf],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label: string;
  @Input() type: string = 'primary';
  @Input() icon: string;
}
