import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appConditionalDisplay]'
})
export class ConditionalDisplayDirective {
  private isVisible = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input() set appConditionalDisplay(condition: boolean) {
    if (condition && !this.isVisible) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.isVisible = true;
    } else if (!condition && this.isVisible) {
      this.viewContainer.clear();
      this.isVisible = false;
    }
  }
}