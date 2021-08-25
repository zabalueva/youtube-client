import { Injectable } from '@angular/core';
import { SearchItem } from '../../models/searchItem.model';

@Injectable({
  providedIn: 'root',
})
export class SortingService {
  public sortedFlagByDate: 'normal' | 'reverse' | '' = '';

  public sortedFlagByCountViews = false;

  sortByDate() {
    if (!this.sortedFlagByDate) {
      this.sortedFlagByDate = 'normal';
    } else if (this.sortedFlagByDate === 'normal') {
      this.sortedFlagByDate = 'reverse';
    } else if (this.sortedFlagByDate === 'reverse') {
      this.sortedFlagByDate = 'normal';
    }
  }

  // TODO: переделать подобно дате
  getSortByCountViews(items: SearchItem[]): SearchItem[] {
    if (this.sortedFlagByCountViews) {
      this.sortedFlagByCountViews = false;
      return items.sort(
        (a, b) => +a.statistics.viewCount - +b.statistics.viewCount,
      );
    }
    this.sortedFlagByCountViews = true;
    return items.sort(
      (a, b) => +b.statistics.viewCount - +a.statistics.viewCount,
    );
  }
}
