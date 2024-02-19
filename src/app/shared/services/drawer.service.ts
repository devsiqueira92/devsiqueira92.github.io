import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DrawerService {
  private _visibleDrawer = new BehaviorSubject<boolean>(false);

  visibleDrawer$ = this._visibleDrawer.asObservable();

  get visibleDrawer(): boolean {
    return this._visibleDrawer.value;
  }

  set visibleDrawer(value: boolean) {
    this._visibleDrawer.next(value);
  }

  close() {
    this._visibleDrawer.next(false);
  }
}
