import { Directive ,ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appToggleHighlight]'
})
export class ToggleHighlightDirective {

  private isHighlighted = false;

  constructor(private el: ElementRef) { }

  @HostListener('click') onClick() {
    this.isHighlighted = !this.isHighlighted;
    this.highlight(this.isHighlighted ? 'green' : 'red');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
