import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective implements OnInit {
  color: string = 'red';
  color2: string = 'green';

  constructor(private element: ElementRef) {}

  ngOnInit(): void {}
  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.background = this.color;
  }
  @HostListener('mouseenter') onMouseLeave() {
    this.element.nativeElement.style.background = this.color2;
  }
}
