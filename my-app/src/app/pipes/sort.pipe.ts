import { NgIterable, Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/searchItem.model';

@Pipe({
    name: 'sort',
})
export class SortPipe implements PipeTransform {
    private keyWord: string = 'for';
    public sortingItems: SearchItem[] = [];

    transform(value: SearchItem[], ...args: string[]): SearchItem[] {
        for (let item of value) {
            if (item.snippet.title.includes(this.keyWord)) {
                console.log('sorting');
                this.sortingItems.push(item);
            }
        }
        return this.sortingItems;
    }
}
