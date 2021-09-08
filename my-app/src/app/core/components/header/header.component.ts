import {
  Component, OnInit,
} from '@angular/core';
import { ShowResultService } from 'src/app/youtube/services/showResultService';
import { PATHS } from 'src/app/shared/paths';
import { ShowFiltersService } from 'src/app/youtube/services/show-filters.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, filter, switchMap,
} from 'rxjs/operators';
import { GetSearchService } from 'src/app/youtube/services/get-search.service';

const PLACE_HOLDER = 'What are you want to find out?';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  public logo: string = PATHS.logoApp;

  public avatar: string = PATHS.avatarUser;

  public filterButton: string = PATHS.filterButtonSettings;

  public inputPlaceholder: string = PLACE_HOLDER;

  public userName: string = 'Your name';

  private searchText$ = new Subject<string>();

  constructor(
    public showResultService: ShowResultService,
    public showFiltersService: ShowFiltersService,
    public authService: AuthService,
    public getSearchService: GetSearchService,
  ) {
  }

  ngOnInit() {
    this.searchText$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter((text) => text.length >= 3),
      switchMap((text) => this.getSearchService.getSearch(text)),
    ).subscribe(() => this.showResultService.showMode());
  }

  getUsername():void {
    this.userName = 'Your name';
  }

  toggleFilter(): void {
    this.showFiltersService.toggleShowMode();
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  search(packageName: string) {
    this.searchText$.next(packageName);
  }
}
