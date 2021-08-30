import { Component } from '@angular/core';
import { ShowResultByWordService } from 'src/app/youtube/services/showResultByWordService';
import { ShowFiltersService } from '../../services/show-filters.service';
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
    public showFiltersService: ShowFiltersService,
  ) { }

  getWord() {
    this.showResultByWordService.saveKeyword(this.keywords);
  }
}
