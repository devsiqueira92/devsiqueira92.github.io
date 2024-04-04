import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BackSubmitPanelComponent } from '@app/shared/components/back-submit-panel/back-submit-panel.component';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { InputComponent } from '@app/shared/components/forms/input/input.component';
import { DataMode } from '@app/shared/helpers/datamode.helper';
import {
  AddressForm,
  AddressFormOutput,
} from '@app/shared/interfaces/address-form.interface';
import { Address } from '@app/shared/interfaces/address.interface';
import { AddressService } from '@app/shared/services/address.service';

@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
    NgIf,
    BackSubmitPanelComponent,
  ],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss',
})
export class AddressComponent {
  mode: string;
  formGroup: FormGroup<AddressForm>;
  constructor(
    public route: ActivatedRoute,
    private addressService: AddressService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const formData = this.route.snapshot.data.formData as AddressFormOutput;
    this.mode = this.route.snapshot.data.mode;
    console.log(formData);

    this.formGroup = new FormGroup<AddressForm>({
      id: new FormControl({
        value: null,
        disabled: this.mode === DataMode.edit,
      }),
      city: new FormControl({ value: null, disabled: false }, [
        Validators.required,
      ]),
      street: new FormControl({ value: null, disabled: false }, [
        Validators.required,
      ]),

      number: new FormControl({ value: null, disabled: false }, []),

      postalCode: new FormControl({ value: null, disabled: false }, []),
    });

    if (formData.mode === DataMode.view || formData.mode === DataMode.edit) {
      const address = {
        ...formData.address,
      };
      this.formGroup.patchValue({
        ...address,
      } as Address);
    }
  }

  submit() {
    // const address = this.formGroup.getRawValue();
    // if (address.id === null) {
    //   this.addressService
    //     .add(address)
    //     .subscribe(() => this.router.navigate(['/addresss']));
    // } else {
    //   this.addressService
    //     .update(address)
    //     .subscribe(() => this.router.navigate(['/addresss']));
    // }
  }

  back() {
    this.router.navigate(['/addresss']);
  }
}
