import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appScrollAnimate]'
})
export class ScrollAnimateDirective implements OnInit {
  @Input() animationClass: string = 'zoom-on-reload';
  @Input() threshold: number = 0.1;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, 'animation-class');
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(this.el.nativeElement);
    } else {
      console.warn('IntersectionObserver is not supported in this environment.');
    }
  }
}
