import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShowFiltersService {
  public showFilters = false;

  toggleShowMode() {
    this.showFilters = !this.showFilters;
  }

  get getShowFilterState() {
    return this.showFilters;
  }
}
