import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-back-submit-panel',
  standalone: true,
  imports: [NzFormModule, NzButtonModule, ButtonComponent],
  templateUrl: './back-submit-panel.component.html',
  styleUrl: './back-submit-panel.component.scss',
})
export class BackSubmitPanelComponent implements OnInit {
  @Input() controlName: string;
  @Input() disabled = false;

  @Output() submit = new EventEmitter();
  @Output() back = new EventEmitter();

  ngOnInit(): void {}

  onBack() {
    this.back.emit();
  }

  onSubmit() {
    this.submit.emit();
  }
}
