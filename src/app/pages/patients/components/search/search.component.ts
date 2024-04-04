import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { InputComponent } from '@app/shared/components/forms/input/input.component';
import { PatientService } from '../../services/patient.service';
import { map } from 'rxjs';
import { SearchService } from '@app/shared/services/search.service';

@Component({
  standalone: true,
  imports: [ButtonComponent, InputComponent, RouterModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  formGroup: FormGroup<any>;
  constructor(
    private router: Router,
    private patientService: PatientService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup<any>({
      id: new FormControl({
        value: null,
        disabled: false,
      }),
    });
  }

  search() {
    //buscar por cpf/telefone
    //se encontrar resultado, redirecionar para lista
    //se não encontrar resultado, redirecionar para formulario
    this.patientService
      .getByDocument(this.formGroup.value.id)
      .pipe(
        map((result) => {
          this.searchService.setSearchResult(result);
          result
            ? this.router.navigate(['/patients/search/result'])
            : this.router.navigate(['/patients/create']);
        })
      )
      .subscribe();
  }
}
