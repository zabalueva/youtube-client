import { Component } from '@angular/core';
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

  public searchActive = false;


  constructor() {
  }

  getUsername() {
    this.userName = 'Your name';
  }

  toggleFilter() {
    this.showFilter = true;
  }

  toggleSearchResult() {
    this.searchActive = true;
  }
}

export { HeaderComponent as default };
