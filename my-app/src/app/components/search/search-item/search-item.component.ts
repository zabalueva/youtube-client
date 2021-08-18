import { Component } from '@angular/core';
import { SearchItem } from 'src/app/models/searchItem.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
// eslint-disable-next-line import/prefer-default-export
export class SearchItemComponent {
  item: SearchItem;

  constructor() {
    this.item = {} as SearchItem;
  }
}
