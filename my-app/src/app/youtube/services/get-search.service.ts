import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import environment from 'src/environments/environment';
import { SearchItem } from '../models/searchItem.model';
import { SearchResults } from '../models/searchResults.model';

@Injectable({
  providedIn: 'root',
})
export class GetSearchService {
  public searchResults$: BehaviorSubject<SearchResults> = new BehaviorSubject({ } as SearchResults);

  constructor(private http: HttpClient) {}

  get getSearchResult(): Observable<SearchResults> {
    return this.searchResults$.asObservable();
  }

  getSearch(keyword: string): Observable<SearchResults> {
    return this.http
      .get(`${environment.baseUrl}search?q=${keyword}&type=video&part=snippet`)
      .pipe(map((data: any) => {
        this.searchResults$.next(data);
        return data;
      }));
  }

  getItem(id: string): Observable<SearchItem> {
    const urlVideos = `${environment.baseUrl}videos?id=${id}&part=snippet,statistics`;
    return this.http.get(urlVideos).pipe(
      map((data: any) => data.items[0]),
    );
  }
}
