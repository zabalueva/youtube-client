import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchItem } from '../models/searchItem.model';
import { SearchResults } from '../models/searchResults.model';
import { Statistics } from '../models/statistics.model';

@Injectable({
  providedIn: 'root',
})

export class GetSearchService {
  public searchResults: SearchResults = {} as SearchResults;

  public baseURLSearch: string = 'https://www.googleapis.com/youtube/v3/search';

  public baseURLVideos: string = 'https://www.googleapis.com/youtube/v3/videos';

  public searchItem: SearchItem = {} as SearchItem;

  private keyword: string = '';

  public statisticsResult: Statistics = {} as Statistics;

  public listOfId: (string | null)[] = [];

  private urlSearch: string = `${this.baseURLSearch}&q=${this.keyword}&type=video&part=snippet`;

  private urlVideos: string = `${this.baseURLSearch}`;

  constructor(private http: HttpClient) { }

  public saveKeyword(word: string): void {
    this.keyword = word;
  }

  get getKeyWord(): string {
    return this.keyword;
  }

  getSearch(): Observable<SearchResults> {
    return this.http
      .get(this.urlSearch)
      .pipe(map((data: any) => this.searchResults = data));
  }

  getStatistics(): Observable<SearchResults> {
    this.searchResults.items.map((item) => this.listOfId.push(item.id));
    return this.http
      .get(this.urlVideos)
      // TODO: add find по id?
      .pipe(map((data: any) => data));
  }

  getItem(id: string | null): SearchItem | undefined {
    this.http
      .get(this.urlSearch)
      .pipe(map((data: any) => {
        this.searchResults = data;
      }));
    return this.searchResults?.items?.find((itemFind) => itemFind.id === id);
  }
}
