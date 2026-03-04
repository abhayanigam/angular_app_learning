import { Directive, effect, input, inject, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
})
export class HighlightCompletedTodo {
  isCompleted = input(false);

  el = inject(ElementRef);

  styleEffect = effect(() => {
    if (this.isCompleted()) {
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.backgroundColor = '#d3f9d8';
      this.el.nativeElement.style.color = '#555';
    } else {
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.backgroundColor = 'transparent';
      this.el.nativeElement.style.color = '#000';
    }
  });
} 
