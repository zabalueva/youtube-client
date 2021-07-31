import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { HeaderComponent } from './header/header/header.component';

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchResultsComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export default class ComponentsModule { }
