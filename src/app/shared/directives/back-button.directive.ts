import { Directive, HostListener } from '@angular/core';
import { UrlService } from '../services/url.service';

@Directive({
  selector: '[backButton]',
  standalone: true,
})
export class BackButtonDirective {
  constructor(private navigation: UrlService) {}

  @HostListener('click')
  onClick(): void {
    this.navigation.back();
  }
}
