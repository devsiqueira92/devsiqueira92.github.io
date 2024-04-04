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
  ContactForm,
  ContactFormOutput,
} from '@app/shared/interfaces/contact-form.interface';
import { Contact } from '@app/shared/interfaces/contact.interface';
import { ContactService } from '@app/shared/services/contact.service';
import { DrawerService } from '@app/shared/services/drawer.service';

@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
    NgIf,
    BackSubmitPanelComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  mode: string;
  formGroup: FormGroup<ContactForm>;
  constructor(
    public route: ActivatedRoute,
    private contactService: ContactService,
    private router: Router,
    private drawerService: DrawerService
  ) {}

  ngOnInit(): void {
    const formData = this.route.snapshot.data.formData as ContactFormOutput;
    this.mode = this.route.snapshot.data.mode;
    console.log(formData);

    this.formGroup = new FormGroup<ContactForm>({
      id: new FormControl({
        value: null,
        disabled: this.mode === DataMode.edit,
      }),
      type: new FormControl({ value: null, disabled: false }, [
        Validators.required,
      ]),
      contact: new FormControl({ value: null, disabled: false }, [
        Validators.required,
      ]),
    });

    if (formData.mode === DataMode.view || formData.mode === DataMode.edit) {
      const contact = {
        ...formData.contact,
      };
      this.formGroup.patchValue({
        ...contact,
      } as Contact);
    }
  }

  submit() {
    const contact = this.formGroup.getRawValue() as Contact;
    if (contact.id === null) {
      this.contactService.create(contact).subscribe(() => {
        this.drawerService.close();
        this.router.navigate(['/account']);
      });
    } else {
      this.contactService.update(contact).subscribe(() => {
        this.drawerService.close();
        this.router.navigate(['/account']);
      });
    }
  }

  back() {
    this.router.navigate(['/account']);
    this.drawerService.close();
  }
}
