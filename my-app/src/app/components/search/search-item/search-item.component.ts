import {
  ChangeDetectionStrategy, Component, Input, OnInit,
} from '@angular/core';
import { SearchItem } from 'src/app/models/searchItem.model';
import { COLORS } from 'src/app/shared/colors';

const DAY_IN_MONTH = 30;
const NUMBER_OF_MONTHS = 6;
const NUMBER_OF_DAYS_FRESH = 7;
const COUNT_MS = 1000 * 60 * 60 * 24;
@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchItemComponent implements OnInit {
  @Input() public searchItem: SearchItem = {} as SearchItem;

  public colorHighlightBorder: COLORS = COLORS.DEFAULT;

  ngOnInit() {
    this.getColorBorder();
  }

  getColorBorder():void {
    const countDays = Math.floor(
      (+new Date() - +new Date(this.searchItem?.snippet?.publishedAt)) / COUNT_MS,
    );
    if (countDays < NUMBER_OF_DAYS_FRESH) {
      this.colorHighlightBorder = COLORS.FRESH;
    } else if (countDays < DAY_IN_MONTH) {
      this.colorHighlightBorder = COLORS.MIDDLE;
    } else if (countDays > DAY_IN_MONTH * NUMBER_OF_MONTHS) {
      this.colorHighlightBorder = COLORS.OLD;
    }
  }
}
