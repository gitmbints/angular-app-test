import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  /* 
   * Set the argument of the Input decorator as the same name as the directive selector 
   * This arg is called alias
   * That way the directive can be binded directly
  */
  @Input('appClass') set display(value: Object) {
    const entries = Object.entries(value);

    for (let item of entries) {
      const [className, value] = item;

      if (value) {
        this.renderer.addClass(this.element.nativeElement, className);
      }
    }
  }
}
