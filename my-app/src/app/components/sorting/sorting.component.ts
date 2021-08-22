import { Component, OnInit } from '@angular/core';
import { ShowResultByWordService } from 'src/app/services/showResultByWordService';

@Component({
    selector: 'app-sorting',
    templateUrl: './sorting.component.html',
    styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent implements OnInit {
    keyword: string = '';

    constructor(public showResultByWordService: ShowResultByWordService) {}

    ngOnInit(): void {}

    getSortDate() {
        console.log('date');
    }

    getWord(keyword: string) {
        this.showResultByWordService.showByWordMode();
        this.showResultByWordService.saveKeyword(keyword);
        console.log(keyword);
    }
}
