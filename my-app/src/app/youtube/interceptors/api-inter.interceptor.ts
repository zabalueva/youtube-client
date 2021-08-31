import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

const MY_API_KEY = '?key=AIzaSyBPYHRudHOjhkTbV2rgtFSGhNxDK6Fl7j4';

@Injectable()
export class ApiInterInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const apiReq = request.clone({ url: `${request.url}${MY_API_KEY}` });
    return next.handle(apiReq);
  }
}
