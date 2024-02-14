import { Component } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NzTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

}
