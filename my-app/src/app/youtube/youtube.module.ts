import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';
import MaterialsModule from '../shared/materials/materials.module';
import { SortingComponent } from './components/sorting/sorting.component';
import { HighlightBorderDirective } from './directives/highlight-border.directive';
import { SortByDatePipe } from './pipes/sort-by-date.pipe';
import { SortByCountViewsPipe } from './pipes/sort-by-count-views.pipe';
import { FilterByWordPipe } from './pipes/filter-by-word.pipe';

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchResultsComponent,
    SortingComponent,
    HighlightBorderDirective,
    SortByDatePipe,
    SortByCountViewsPipe,
    FilterByWordPipe,
  ],
  imports: [CommonModule, MaterialsModule, FormsModule],
  exports: [
    SearchItemComponent,
    SearchResultsComponent,
    SortingComponent,
    HighlightBorderDirective,
    SortByCountViewsPipe,
    SortByDatePipe,
    FilterByWordPipe,
  ],
})
export class YoutubeModule {}
