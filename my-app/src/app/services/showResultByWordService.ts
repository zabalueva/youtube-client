import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ShowResultByWordService {
    public showResultByWord$ = new BehaviorSubject<boolean>(false);
    public keyword: string = '';

    get showResultByWordS$() {
        return this.showResultByWord$.asObservable();
    }

    showByWordMode() {
        this.showResultByWord$.next(true);
    }

    saveKeyword(word: string) {
        this.keyword = word;
    }

    getKeyWord() {
        return this.keyword;
    }
}
