import {
  Directive, ElementRef, Input, OnInit,
} from '@angular/core';
import { COLORS } from '../shared/colors';

@Directive({
  selector: '[appHighlightBorder]',
})
export class HighlightBorderDirective implements OnInit {
  @Input('appHighlightBorder') public colorHighlight = COLORS.DEFAULT;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.highlight(this.colorHighlight);
  }

  public highlight(color: string):void {
    this.el.nativeElement.style.borderBottom = `solid ${color}`;
  }
}
