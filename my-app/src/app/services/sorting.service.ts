import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SortingService {
  public sortedFlagByDate: 'normal' | 'reverse' | '' = '';

  public sortedFlagByCountViews: 'normal' | 'reverse' | '' = '';

  sortByDate() {
    if (!this.sortedFlagByDate) {
      this.sortedFlagByDate = 'normal';
    } else if (this.sortedFlagByDate === 'normal') {
      this.sortedFlagByDate = 'reverse';
    } else if (this.sortedFlagByDate === 'reverse') {
      this.sortedFlagByDate = 'normal';
    }
  }
}
