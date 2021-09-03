import { SearchResults } from 'src/app/youtube/models/searchResults.model';
import { ShowResultService } from 'src/app/youtube/services/showResultService';
import { ShowResultByWordService } from 'src/app/youtube/services/showResultByWordService';
import { Component, OnInit } from '@angular/core';
import { SortingService } from 'src/app/youtube/services/sorting.service';
import { GetSearchService } from 'src/app/youtube/services/get-search.service';

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
    private getSearchService: GetSearchService,
    public showResultByWordService: ShowResultByWordService,
    public sortingService: SortingService,
  ) {}

  ngOnInit() {
    this.showResultService.showResult$.subscribe(
      (show: boolean) => {
        this.showResultFlag = show;
      },
    );
    this.getResults();
  }

  // TODO: добавить onChange чтобы результаты перерисовывались когда меняется сабскрайбер?
  // Почему не меняется автоматически это же обзёрвбл?..

  getResults() {
    this.getSearchService.getSearch().subscribe((showResult) => {
      this.searchResult = showResult;
    });
    // TODO: получить статистику здесь через сервис?
    this.searchResult?.items?.map(
      (item) => this.getSearchService.getItem(item.id.videoId).subscribe(
        (itemPoint) => {
          console.log(itemPoint);
        },
      ),
    );
  }
}
