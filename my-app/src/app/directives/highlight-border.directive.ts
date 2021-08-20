import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightBorder]'
})
export class HighlightBorderDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.borderBottom = 'solid red';
 }

}
