import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { HeaderComponent } from './header/header.component';
import { StatisticsComponent } from './search/statistics/statistics.component';
import MaterialsModule from '../materials/materials.module';
import { SortingComponent } from './sorting/sorting.component';
import { HighlightBorderDirective } from '../directives/highlight-border.directive';

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchResultsComponent,
    HeaderComponent,
    StatisticsComponent,
    SortingComponent,
    HighlightBorderDirective,
  ],
  imports: [
    CommonModule,
    MaterialsModule,
  ],
  exports: [
    SearchItemComponent,
    SearchResultsComponent,
    HeaderComponent,
    StatisticsComponent,
    HighlightBorderDirective,
  ],
})
export class ComponentsModule { }
