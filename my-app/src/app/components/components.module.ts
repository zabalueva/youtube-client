import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { HeaderComponent } from './header/header.component';
import { StatisticsComponent } from './search/statistics/statistics.component';

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchResultsComponent,
    HeaderComponent,
    StatisticsComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class ComponentsModule { }
