import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByCountViews'
})
export class SortByCountViewsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
