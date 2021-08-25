import {
  Directive, ElementRef, Input, OnInit,
} from '@angular/core';

@Directive({
  selector: '[appHighlightBorder]',
})
export class HighlightBorderDirective implements OnInit {
  @Input('appHighlightBorder') colorHighlight = '#8B0000';

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.highlight(this.colorHighlight);
  }

  public highlight(color: string) {
    this.el.nativeElement.style.borderBottom = `solid ${color}`;
  }
}
