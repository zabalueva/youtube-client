import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { HeaderComponent } from './header/header.component';
import MaterialsModule from '../materials/materials.module';
import { SortingComponent } from './sorting/sorting.component';
import { HighlightBorderDirective } from '../directives/highlight-border.directive';
import { SortPipe } from '../pipes/sort.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        SearchItemComponent,
        SearchResultsComponent,
        HeaderComponent,
        SortingComponent,
        HighlightBorderDirective,
        SortPipe,
    ],
    imports: [CommonModule, MaterialsModule, FormsModule],
    exports: [
        SearchItemComponent,
        SearchResultsComponent,
        HeaderComponent,
        HighlightBorderDirective,
        SortPipe,
    ],
})
export class ComponentsModule {}
