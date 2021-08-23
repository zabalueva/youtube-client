import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/models/searchItem.model';
import { SearchResults } from 'src/app/models/searchResults.model';
import { ShowResultByWordService } from 'src/app/services/showResultByWordService';

@Component({
    selector: 'app-sorting',
    templateUrl: './sorting.component.html',
    styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent implements OnInit {
    @Input() searchResult: SearchResults = {} as SearchResults;
    keywords: string = '';

    constructor(public showResultByWordService: ShowResultByWordService) {}

    ngOnInit(): void {}

    getSortDate(items: SearchItem[]) {
        console.log('date');
        return items.sort((a, b) => {
            return (
                <any>new Date(b.snippet.publishedAt) -
                <any>new Date(a.snippet.publishedAt)
            );
        });
    }

    getWord(keyword: string) {
        this.showResultByWordService.showByWordMode();
        this.showResultByWordService.saveKeyword(keyword);
    }
}
