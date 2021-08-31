import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchItem } from '../models/searchItem.model';
import { SearchResults } from '../models/searchResults.model';

const MY_API_KEY = 'AIzaSyBPYHRudHOjhkTbV2rgtFSGhNxDK6Fl7j4';

@Injectable({
  providedIn: 'root',
})

export class GetSearchService {
  public searchResults: SearchResults = {} as SearchResults;

  public baseURLSearch: string = 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=';

  public baseURLVideos: string = 'https://www.googleapis.com/youtube/v3/videos';

  public searchItem: SearchItem = {} as SearchItem;

  private keyword: string = '';

  private url: string = `${this.baseURLSearch}${MY_API_KEY}&q=${this.keyword}`;

  constructor(private http: HttpClient) { }

  public saveKeyword(word: string): void {
    this.keyword = word;
  }

  get getKeyWord(): string {
    return this.keyword;
  }

  getSearch(): Observable<SearchResults> {
    return this.http
      .get(this.url)
      .pipe(map((data: any) => this.searchResults = data));
  }

  getItem(id: string | null): SearchItem | undefined {
    this.http
      .get(this.url)
      .pipe(map((data: any) => {
        this.searchResults = data;
      }));
    return this.searchResults?.items?.find((itemFind) => itemFind.id === id);
  }
}
