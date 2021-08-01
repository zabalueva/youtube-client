import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public logo: string;

  public avatar: string;

  public inputPlaceholder: string;

  public userName: string = 'Your name';

  constructor() {
    this.logo = 'assets/images/logo.png';
    this.avatar = 'assets/images/login.png';
    this.inputPlaceholder = 'What are you want to find out?';
  }

  getUsername() {
    this.userName = 'Your name';
  }
}

export { HeaderComponent as default };
