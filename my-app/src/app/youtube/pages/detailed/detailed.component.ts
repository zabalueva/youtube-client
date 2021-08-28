import {
  ChangeDetectionStrategy, Component, Input, OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { COLORS } from 'src/app/shared/colors';
import { SearchItem } from '../../models/searchItem.model';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailedComponent implements OnInit {
  public searchItem: SearchItem = {} as SearchItem;

  @Input() colorHighlightBorder = COLORS.DEFAULT;

  constructor(private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.getItem();
  }

  getItem(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
  }
}
