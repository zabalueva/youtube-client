import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/youtube/models/searchItem.model';
import { SearchResults } from 'src/app/youtube/models/searchResults.model';
import { ShowResultByWordService } from 'src/app/youtube/services/showResultByWordService';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent {
  keywords: string = '';

  constructor(
    private showResultByWordService: ShowResultByWordService,
    public sortingService: SortingService,
  ) { }

  getWord() {
    this.showResultByWordService.saveKeyword(this.keywords);
  }
}
