import { NgIterable, Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/searchItem.model';

@Pipe({
    name: 'sort',
    pure: false,
})
export class SortPipe implements PipeTransform {
    public sortingItems: SearchItem[] = [];

    transform(value: SearchItem[], keyword: string): SearchItem[] {
        for (let item of value) {
            if (keyword != '') {
                if (item.snippet.title.includes(keyword)) {
                    this.sortingItems.push(item);
                }
            } else return value;
        }
        return Array.from(new Set(this.sortingItems));
    }
}
