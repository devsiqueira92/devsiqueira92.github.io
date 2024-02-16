import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowIfLoggedDirective } from './shared/directives/show-if-authorized.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    FooterComponent,
    HeaderComponent,
    NzIconModule,
    ReactiveFormsModule,
    ShowIfLoggedDirective,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  collapsedSize: string;
  uncollapsedSize: string;

  isMobile = window.innerWidth < 720;

  ngOnInit(): void {
    this.collapsedSize = this.isMobile ? '80px' : '0';
    this.uncollapsedSize = !this.isMobile ? '200px' : '0';
  }
}
