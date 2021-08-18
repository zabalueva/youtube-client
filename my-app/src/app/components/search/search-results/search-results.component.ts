import { Component } from '@angular/core';
import { SearchItem } from 'src/app/models/searchItem.model';
import { SearchResults } from 'src/app/models/searchResults.model';
/* import { Page } from 'src/app/models/page.model'; */
/* import { PageInfo } from 'src/app/models/pageInfo.model'; */

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  searchResult: SearchResults;

  searchItems: SearchItem[] = [];

  constructor() {
    this.searchResult = {} as SearchResults;
  }
}
