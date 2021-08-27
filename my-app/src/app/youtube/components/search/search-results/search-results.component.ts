import { HttpClient } from '@angular/common/http';

import { SearchResults } from 'src/app/youtube/models/searchResults.model';
import { ShowResultService } from 'src/app/youtube/services/showResultService';
import { map } from 'rxjs/operators';
import { ShowResultByWordService } from 'src/app/youtube/services/showResultByWordService';
import { Component, OnInit } from '@angular/core';
import { SortingService } from 'src/app/youtube/services/sorting.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  public searchResult: SearchResults = {} as SearchResults;

  public showResultFlag = false;

  constructor(
    private showResultService: ShowResultService,
    private http: HttpClient,
    public showResultByWordService: ShowResultByWordService,
    public sortingService: SortingService,
  ) {}

  ngOnInit() {
    this.showResultService.showResult$.subscribe(
      (show: boolean) => {
        this.showResultFlag = show;
      },
    );

    this.http
      .get('/assets/mockdata.json')
    // TODO: ask correct type instead any???
      .pipe(map((data: any) => data))
      .subscribe((data: SearchResults) => {
        this.searchResult = data;
      });
  }
}
