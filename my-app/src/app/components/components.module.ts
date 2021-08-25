import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { HeaderComponent } from './header/header.component';
import MaterialsModule from '../materials/materials.module';
import { SortingComponent } from './sorting/sorting.component';
import { HighlightBorderDirective } from '../directives/highlight-border.directive';
import { FilterByWordPipe } from '../pipes/filter-by-word.pipe';
import { SortByDatePipe } from '../pipes/sort-by-date.pipe';

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchResultsComponent,
    HeaderComponent,
    SortingComponent,
    HighlightBorderDirective,
    FilterByWordPipe,
    SortByDatePipe,
  ],
  imports: [CommonModule, MaterialsModule, FormsModule],
  exports: [
    SearchItemComponent,
    SearchResultsComponent,
    HeaderComponent,
    HighlightBorderDirective,
    FilterByWordPipe,
    SortByDatePipe,
  ],
})
export class ComponentsModule {}
