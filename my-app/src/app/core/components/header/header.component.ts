import { Component, OnInit } from '@angular/core';
import { ShowResultService } from 'src/app/youtube/services/showResultService';
import { PATHS } from 'src/app/shared/paths';
import { ShowFiltersService } from 'src/app/youtube/services/show-filters.service';

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

  public showFilter = false;

  public showResult = false;

  constructor(public showResultService: ShowResultService, public showFiltersService: ShowFiltersService) {
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
}

export { HeaderComponent as default };
