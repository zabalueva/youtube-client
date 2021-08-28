/* eslint-disable class-methods-use-this */
import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/searchItem.model';

@Pipe({
  name: 'sortByCountViews',
})
export class SortByCountViewsPipe implements PipeTransform {
  transform(searchItems: SearchItem[], order: 'normal' | 'reverse' | ''): SearchItem[] {
    if (!order) return searchItems;
    const result = searchItems.sort((a, b) => +a.statistics.viewCount - +b.statistics.viewCount);
    if (order === 'reverse') {
      return result.reverse();
    }
    return result;
  }
}
