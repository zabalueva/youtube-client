import {
  ChangeDetectionStrategy, Component, Input, OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { COLORS } from 'src/app/shared/colors';
import { SearchItem } from '../../models/searchItem.model';
import { GetSearchService } from '../../services/get-search.service';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailedComponent implements OnInit {
  public searchItem: SearchItem | undefined = {} as SearchItem;

  @Input() colorHighlightBorder = COLORS.DEFAULT;

  constructor(private route: ActivatedRoute,
    public getSearchService: GetSearchService) { }

  ngOnInit(): void {
    this.getItem();
  }

  getItem(): void {
    const id: string = String(this.route.snapshot.paramMap.get('id'));
    this.searchItem = this.getSearchService.getItem(id);
  }
}
