import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import environment from 'src/environments/environment';
import { SearchItem } from '../models/searchItem.model';
import { SearchResults } from '../models/searchResults.model';
import { Statistics } from '../models/statistics.model';

@Injectable({
  providedIn: 'root',
})
export class GetSearchService {
  private keyword: string = '';

  public statisticsResult: Statistics = {} as Statistics;

  public listOfId: (string | null)[] = [];

  public searchResults$: BehaviorSubject<SearchResults> = new BehaviorSubject({ } as SearchResults);

  constructor(private http: HttpClient) {}

  get getSearchResult(): Observable<SearchResults> {
    return this.searchResults$.asObservable();
  }

  public saveKeyword(word: string): void {
    this.keyword = word;
  }

  get getKeyWord(): string {
    return this.keyword;
  }

  getSearch(keyword: string): Observable<SearchResults> {
    return this.http
      .get(`${environment.baseUrl}search?q=${keyword}&type=video&part=snippet`)
      .pipe(map((data: any) => {
        this.searchResults$.next(data);
        return data;
      }));
  }

  /*  // TODO: сделать общий метод, чтобы сначала получить статистику и
  // переписать общий результат и потом просто подписаться в компоненте через сабскрайб?
  getShowSearch() {
    this.getSearch();
    this.getStatistics();
    return this.searchResults;
  }

  // TODO: получить статистику здесь?
  getStatistics(): void {
    this.searchResults?.items?.map((item) => this.getItem(item.id.videoId));
  } */

  getItem(id: string): Observable<SearchItem> {
    const urlVideos = `${environment.baseUrl}videos?id=${id}&part=snippet,statistics`;
    return this.http.get(urlVideos).pipe(
      map((data: any) => data.items[0]),
    );
  }
}
