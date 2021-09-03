import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import environment from 'src/environments/environment';
import { SearchItem } from '../models/searchItem.model';
import { SearchResults } from '../models/searchResults.model';
import { Statistics } from '../models/statistics.model';

@Injectable({
  providedIn: 'root',
})
export class GetSearchService {
  public searchResults: SearchResults = {} as SearchResults;

  public searchItem: SearchItem = {} as SearchItem;

  private keyword: string = '';

  public statisticsResult: Statistics = {} as Statistics;

  public listOfId: (string | null)[] = [];

  private searchID: string = 'EFfu-xqAEts';

  private urlVideos: string = `${environment.baseUrl}videos?id=${this.searchID}&part=snippet,statistics`;

  constructor(private http: HttpClient) {}

  public saveKeyword(word: string): void {
    this.keyword = word;
  }

  get getKeyWord(): string {
    return this.keyword;
  }

  getUrlVideo(id:string) {
    this.urlVideos = `${environment.baseUrl}videos?id=${id}&part=snippet,statistics`;
    return this.urlVideos;
  }

  getSearch(): Observable<SearchResults> {
    return this.http
      .get(`${environment.baseUrl}search?q=${this.keyword}&type=video&part=snippet`)
      .pipe(map((data: any) => (this.searchResults = data)));
  }

  // TODO: сделать общий метод, чтобы сначала получить статистику и
  // переписать общий результат и потом просто подписаться в компоненте через сабскрайб?
  getShowSearch() {
    this.getSearch();
    this.getStatistics();
    return this.searchResults;
  }

  // TODO: получить статистику здесь?
  getStatistics(): void {
    this.searchResults?.items?.map((item) => this.getItem(item.id.videoId));
  }

  getItem(id: string) {
    this.getUrlVideo(id);
    return this.http.get(this.urlVideos).pipe(
      map((data: any) => {
        this.searchItem = data.items[0];
        this.searchItem.statistics = data.items[0].statistics;
      }),
    );
  }
}
