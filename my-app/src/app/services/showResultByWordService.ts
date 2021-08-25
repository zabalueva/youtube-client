import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShowResultByWordService {
  private keyword: string = '';

  public saveKeyword(word: string):void {
    this.keyword = word;
  }

  get getKeyWord(): string {
    return this.keyword;
  }
}
