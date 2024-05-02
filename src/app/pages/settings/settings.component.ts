import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SettingsService } from './services/settings.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { BackSubmitPanelComponent } from '@app/shared/components/back-submit-panel/back-submit-panel.component';
import { DatePickerComponent } from '@app/shared/components/forms/date-picker/date-picker.component';
import { TimePickerComponent } from '@app/shared/components/forms/time-picker/time-picker.component';
import {
  SettingsForm,
  SettingsFormOutput,
} from './entities/settings-form.interface';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import { Settings } from '@app/shared/interfaces/settings.interface';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    DatePickerComponent,
    TimePickerComponent,
    ButtonComponent,
    BackSubmitPanelComponent,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent implements OnInit {
  formGroup: FormGroup<SettingsForm>;
  mode: string;

  constructor(
    private settingService: SettingsService,
    private router: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const formData = this.route.snapshot.data.formData as SettingsFormOutput;
    this.mode = this.route.snapshot.data.mode;
    console.log(formData);

    this.formGroup = new FormGroup<SettingsForm>({
      id: new FormControl({ value: null, disabled: false }),
      startTime: new FormControl({ value: null, disabled: false }),
      endTime: new FormControl({ value: null, disabled: false }),
    });

    if (formData.mode === DataMode.view || formData.mode === DataMode.edit) {
      const setting = {
        ...formData.setting,
      };
      this.formGroup.patchValue({
        ...setting,
      } as Settings);
    }
  }

  submit() {
    const { startTime, endTime } = this.formGroup.value;
    this.settingService
      .setWorkingTime(startTime?.getHours() + '', endTime?.getHours() + '')
      .subscribe();
  }

  back() {
    this.router.navigate(['/scheduling']);
  }
}
