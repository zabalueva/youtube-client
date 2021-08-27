import { Component } from '@angular/core';
import { ShowResultByWordService } from 'src/app/youtube/services/showResultByWordService';
import { SortingService } from '../../services/sorting.service';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent {
  keywords: string = '';

  constructor(
    private showResultByWordService: ShowResultByWordService,
    public sortingService: SortingService,
  ) { }

  getWord() {
    this.showResultByWordService.saveKeyword(this.keywords);
  }
}
