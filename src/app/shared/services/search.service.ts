import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchResult$ = new BehaviorSubject<any | null>(null);
  constructor() {}

  setSearchResult(result: any) {
    this.searchResult$.next(result);
  }

  getResult() {
    return this.searchResult$;
  }
}
