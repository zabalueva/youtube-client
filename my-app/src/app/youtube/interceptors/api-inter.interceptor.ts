import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import environment from 'src/environments/environment';

@Injectable()
export class ApiInterInterceptor implements HttpInterceptor {
  private API_KEY = environment.apiKey;

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const apiReq = request.clone({
      setParams: {
        key: this.API_KEY,
      },
    });
    return next.handle(apiReq);
  }
}
