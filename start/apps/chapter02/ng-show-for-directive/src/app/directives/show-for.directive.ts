import {
  Directive,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appShowFor]',
})
export class ShowForDirective {
  @Input() duration = 1500;
  @Input() set appShowFor(value: boolean) {
    if (value) {
      this.show();
    } else {
      this.hide();
    }
  }
  @Output() elementHiden = new EventEmitter();

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  show() {
    this.viewContainerRef.createEmbeddedView(this.templateRef);
    setTimeout(() => {
      this.elementHiden.emit();
    }, this.duration);
  }

  hide() {
    this.viewContainerRef.clear();
  }
}
