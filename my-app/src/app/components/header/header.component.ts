import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ShowResultService } from 'src/app/services/showResultService';
import { PATHS } from 'src/app/shared/paths';

const PLACE_HOLDER = 'What are you want to find out?';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  public logo: string = PATHS.logoApp;

  public avatar: string = PATHS.avatarUser;

  public filterButton: string = PATHS.filterButtonSettings;

  public inputPlaceholder: string = PLACE_HOLDER;

  public userName: string = 'Your name';

  public showFilter = false;

  public showResult = false;

  constructor(public showResultService: ShowResultService) {
    showResultService.showResultS$.subscribe((show) => this.showResult = show);
  }

  getUsername() {
    this.userName = 'Your name';
  }

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  showSearchResult() {
    this.showResultService.showMode();
  }
}

export { HeaderComponent as default };
