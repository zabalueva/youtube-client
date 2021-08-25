import { Component } from '@angular/core';
import { ShowResultByWordService } from 'src/app/services/showResultByWordService';
import { SortingService } from './sorting.service';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent {
  public keywords: string = '';

  constructor(private showResultByWordService: ShowResultByWordService,
    public sortingService: SortingService) {}

  getWord() {
    this.showResultByWordService.saveKeyword(this.keywords);
  }
}
