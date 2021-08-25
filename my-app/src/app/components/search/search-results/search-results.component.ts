import { HttpClient } from '@angular/common/http';
import {
  Component, OnInit,
} from '@angular/core';
import { SearchResults } from 'src/app/models/searchResults.model';
import { ShowResultService } from 'src/app/services/showResultService';
import { map } from 'rxjs/operators';
import { ShowResultByWordService } from 'src/app/services/showResultByWordService';
import { SortingService } from '../../sorting/sorting.service';

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
  ) {

  }

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
