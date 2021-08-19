import { Component } from '@angular/core';
import { SearchItem } from 'src/app/models/searchItem.model';
import { SearchResults } from 'src/app/models/searchResults.model';
import { ShowResultService } from 'src/app/services/showResultService';
/* import { Page } from 'src/app/models/page.model'; */
/* import { PageInfo } from 'src/app/models/pageInfo.model'; */

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  public showResultFlag = false;

  searchResult: SearchResults;

  searchItems: SearchItem[] = [];

  constructor(showResultService: ShowResultService) {
    this.searchResult = {} as SearchResults;
    showResultService.showResult$.subscribe((show: boolean) => this.showResultFlag = show);
  }
}
