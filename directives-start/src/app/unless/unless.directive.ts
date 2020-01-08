import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.viewContainerRefference.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRefference.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>, 
    private viewContainerRefference: ViewContainerRef) { }

}
