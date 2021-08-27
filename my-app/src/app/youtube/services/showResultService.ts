import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShowResultService {
  public showResult$ = new BehaviorSubject<boolean>(false);

  get showResultS$() {
    return this.showResult$.asObservable();
  }

  showMode() {
    this.showResult$.next(true);
  }
}
