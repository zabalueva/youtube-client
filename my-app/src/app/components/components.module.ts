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

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchResultsComponent,
    HeaderComponent,
    SortingComponent,
    HighlightBorderDirective,
    FilterByWordPipe,
  ],
  imports: [CommonModule, MaterialsModule, FormsModule],
  exports: [
    SearchItemComponent,
    SearchResultsComponent,
    HeaderComponent,
    HighlightBorderDirective,
    FilterByWordPipe,
  ],
})
export class ComponentsModule {}
