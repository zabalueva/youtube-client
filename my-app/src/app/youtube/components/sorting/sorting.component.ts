import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/youtube/models/searchItem.model';
import { SearchResults } from 'src/app/youtube/models/searchResults.model';
import { ShowResultByWordService } from 'src/app/youtube/services/showResultByWordService';

@Component({
    selector: 'app-sorting',
    templateUrl: './sorting.component.html',
    styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent implements OnInit {
    //TODO: add correct input data from SearchResults
    @Input() searchResult: SearchResults = {} as SearchResults;
    keywords: string = '';
    sortedFlagByDate = false;
    sortedFlagByCountViews = false;

    constructor(public showResultByWordService: ShowResultByWordService) {}

    ngOnInit(): void {}

    getSortDate(items: SearchItem[]) {
        if (this.sortedFlagByDate) {
            this.sortedFlagByDate = false;
            return items.sort(
                (a, b) =>
                    <any>new Date(a.snippet.publishedAt) -
                    <any>new Date(b.snippet.publishedAt),
            );
        } else {
            this.sortedFlagByDate = true;
            return items.sort(
                (a, b) =>
                    <any>new Date(b.snippet.publishedAt) -
                    <any>new Date(a.snippet.publishedAt),
            );
        }
    }

    getSortByCountViews(items: SearchItem[]) {
        if (this.sortedFlagByCountViews) {
            this.sortedFlagByCountViews = false;
            return items.sort(
                (a, b) => +a.statistics.viewCount - +b.statistics.viewCount,
            );
        } else {
            this.sortedFlagByCountViews = true;
            return items.sort(
                (a, b) => +b.statistics.viewCount - +a.statistics.viewCount,
            );
        }
    }

    //TODO: how we can remove finded items after backspace keyword
    getWord(keyword: string) {
        this.showResultByWordService.showByWordMode();
        this.showResultByWordService.saveKeyword(keyword);
    }
}
