import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  redirectUrl: string | null = 'admin';

  login(): Observable<boolean> {
    localStorage.setItem('login', 'user');
    localStorage.setItem('password', '1234');
    return of(true).pipe(
      delay(1000),
      tap(() => {
        this.isLoggedIn = true;
      }),
    );
  }

  logout(): void {
    localStorage.setItem('login', '');
    localStorage.setItem('password', '');
    this.isLoggedIn = false;
  }
}
