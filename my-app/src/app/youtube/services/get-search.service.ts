import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchResults } from '../models/searchResults.model';

@Injectable({
  providedIn: 'root',
})
export class GetSearchService {
  public searchResults: SearchResults = {} as SearchResults;

  constructor(private http: HttpClient) { }

  getSearch(): Observable<SearchResults> {
    return this.http
      .get('/assets/mockdata.json')
      // TODO: ask correct type instead any???
      .pipe(map((data: any) => data));
  }
}
