import { ElementRef } from '@angular/core';
import { HighlightBorderDirective } from './highlight-border.directive';

describe('HighlightBorderDirective', () => {
  const mockElementRef = {} as ElementRef;

  it('should create an instance', () => {
    const directive = new HighlightBorderDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
