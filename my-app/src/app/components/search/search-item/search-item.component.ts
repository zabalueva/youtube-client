import { Component, Input } from '@angular/core';
import { SearchItem } from 'src/app/models/searchItem.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})

export class SearchItemComponent {
  @Input() public searchItem: SearchItem = {} as SearchItem;

  constructor() {
    console.log(this.searchItem)
  }
}
