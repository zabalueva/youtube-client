import { Component, Input, OnInit } from '@angular/core';
import { COLORS } from 'src/app/shared/colors';
import { SearchItem } from '../../models/searchItem.model';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss'],
})
export class DetailedComponent implements OnInit {
  @Input() searchItem: SearchItem = {} as SearchItem;

  @Input() colorHighlightBorder = COLORS.DEFAULT;

  constructor() { }

  ngOnInit(): void {

  }
}
