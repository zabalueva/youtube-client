import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShowResultByWordService {
  public showResultByWord$ = new BehaviorSubject<boolean>(false);

  private keyword: string = '';

  public saveKeyword(word: string) {
    this.keyword = word;
  }

  get getKeyWord() {
    return this.keyword;
  }
}
