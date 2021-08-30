import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService, public router: Router) {
  }

  login() {
    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        const redirectUrl = 'youtube';
        this.router.navigate([redirectUrl]);
      }
    });
  }

  logout() {
    this.authService.logout();
  }

  public stopSubmit = false;
}
