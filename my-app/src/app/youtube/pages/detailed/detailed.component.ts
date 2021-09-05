import {
  ChangeDetectionStrategy, Component, Input, OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { COLORS } from 'src/app/shared/colors';
import { Subject } from 'rxjs';
import { SearchItem } from '../../models/searchItem.model';
import { GetSearchService } from '../../services/get-search.service';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailedComponent implements OnInit {
  public searchItem?: SearchItem;

  searchItem$: Subject<SearchItem> = new Subject();

  @Input() colorHighlightBorder = COLORS.DEFAULT;

  constructor(private route: ActivatedRoute,
    public getSearchService: GetSearchService) { }

  ngOnInit(): void {
    this.getItemSearch();
    this.searchItem$.asObservable().subscribe((item) => this.searchItem = item);
  }

  getItemSearch(): void {
    const id: string = String(this.route.snapshot.paramMap.get('id'));
    this.getSearchService.getItem(id).subscribe((data:SearchItem) => {
      this.searchItem$.next(data);
    });
  }
}
