import { Injectable } from '@angular/core';
import {
  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): true | UrlTree {
    const { url } = state;
    return this.checkLogin(url);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): true | UrlTree {
    return this.canActivate(route, state);
  }

  checkLogin(url: string): true | UrlTree {
    if (this.authService.isLoggedIn) { return true; }
    this.authService.redirectUrl = url;
    return this.router.parseUrl('/auth');
  }
}
