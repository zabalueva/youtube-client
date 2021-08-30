/* eslint-disable class-methods-use-this */
import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/searchItem.model';

@Pipe({
  name: 'filterByWord',
  pure: false,
})
export class FilterByWordPipe implements PipeTransform {
  transform(searchItems: SearchItem[], keyword: string): SearchItem[] {
    if (!keyword) return searchItems;
    return searchItems.filter(
      (item) => item.snippet.title.toLowerCase().includes(keyword.toLowerCase()),
    );
  }
}
