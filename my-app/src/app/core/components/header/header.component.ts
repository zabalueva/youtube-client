import {
  Component, OnInit, Output, EventEmitter,
} from '@angular/core';
import { ShowResultService } from 'src/app/youtube/services/showResultService';
import { PATHS } from 'src/app/shared/paths';
import { ShowFiltersService } from 'src/app/youtube/services/show-filters.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { GetSearchService } from 'src/app/youtube/services/get-search.service';

const PLACE_HOLDER = 'What are you want to find out?';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  @Output() search: EventEmitter<any> = new EventEmitter();

  public logo: string = PATHS.logoApp;

  public avatar: string = PATHS.avatarUser;

  public filterButton: string = PATHS.filterButtonSettings;

  public inputPlaceholder: string = PLACE_HOLDER;

  public userName: string = 'Your name';

  public showFilter = false;

  public showResult = false;

  public wordForSearch = '';

  constructor(
    public showResultService: ShowResultService,
    public showFiltersService: ShowFiltersService,
    public authService: AuthService,
    public getSearchService: GetSearchService,
  ) {
  }

  ngOnInit() {
    this.showResultService.showResultS$.subscribe((show) => {
      this.showResult = show;
    });
  }

  getUsername():void {
    this.userName = 'Your name';
  }

  toggleFilter(): void {
    this.showFiltersService.toggleShowMode();
  }

  showSearchResult():void {
    this.showResultService.showMode();
  }

  getSearchByWord() {
    this.getSearchService.saveKeyword(this.wordForSearch);
    const typing = fromEvent(document, 'keydown');
    const result = typing.pipe(debounceTime(1000));
    result.subscribe(() => {
      if (this.wordForSearch.length >= 3) {
        this.search.emit(true);
        this.showSearchResult();
      }
    });
  }
}
