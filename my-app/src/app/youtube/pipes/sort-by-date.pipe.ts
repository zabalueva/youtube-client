import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/searchItem.model';

@Pipe({
  name: 'sortByDate',
})
export class SortByDatePipe implements PipeTransform {
  transform(searchItems: SearchItem[], order: 'normal' | 'reverse' | ''): SearchItem[] {
    if (!order) return searchItems;
    const result = searchItems.sort((a: SearchItem, b: SearchItem) => (
      new Date(b.snippet.publishedAt).getTime()
        - new Date(a.snippet.publishedAt).getTime()
    ));
    if (order === 'reverse') {
      return result.reverse();
    }
    return result;
  }
}
