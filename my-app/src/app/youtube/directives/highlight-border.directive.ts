import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[appHighlightBorder]',
})
export class HighlightBorderDirective {
    @Input('appHighlightBorder') colorHighlight = '#8B0000';

    constructor(private el: ElementRef) {
        this.highlight(this.colorHighlight);
    }

    public highlight(color: string) {
        this.el.nativeElement.style.borderBottom = `solid ${color}`;
    }
}
