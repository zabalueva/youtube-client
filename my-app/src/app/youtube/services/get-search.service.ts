import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchItem } from '../models/searchItem.model';
import { SearchResults } from '../models/searchResults.model';

@Injectable({
  providedIn: 'root',
})
export class GetSearchService {
  public searchResults: SearchResults = {} as SearchResults;

  public searchItem: SearchItem = {} as SearchItem;

  constructor(private http: HttpClient) { }

  getSearch(): Observable<SearchResults> {
    return this.http
      .get('/assets/mockdata.json')
      // TODO: ask correct type instead any???
      .pipe(map((data: any) => this.searchResults = data));
  }

  getItem(id: string | null): SearchItem | undefined {
    this.http
      .get('/assets/mockdata.json')
      .pipe(map((data: any) => this.searchResults = data));
    return this.searchResults?.items?.find((itemFind) => itemFind.id === id);
  }
}
