import { Component } from '@angular/core';
import { SearchItem } from 'src/app/models/searchItem.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})

export class SearchItemComponent {
  item: SearchItem;

  constructor() {
    this.item = {} as SearchItem;
  }
}
