import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchItem } from 'src/app/models/searchItem.model';
import { SearchResults } from 'src/app/models/searchResults.model';
import { ShowResultService } from 'src/app/services/showResultService';
import { map } from 'rxjs/operators';
import { ShowResultByWordService } from 'src/app/services/showResultByWordService';

@Component({
    selector: 'app-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
    public showResultFlag = false;
    public showResultByWordFlag = false;

    searchResult: SearchResults;

    keyword: string = '';

    searchItems: SearchItem[] = [];

    constructor(
        showResultService: ShowResultService,
        private http: HttpClient,
        public showResultByWordService: ShowResultByWordService,
    ) {
        this.searchResult = {} as SearchResults;
        showResultService.showResult$.subscribe(
            (show: boolean) => (this.showResultFlag = show),
        );

        showResultByWordService.showResultByWord$.subscribe(
            () => (this.keyword = this.showResultByWordService.getKeyWord()),
        );

        this.http
            .get('/assets/mockdata.json')
            //TODO: ask correct type instead any???
            .pipe(map((data: any) => data))
            .subscribe((data: SearchResults) => {
                this.searchResult = data;
                console.log(this.keyword);
            });
    }
}
