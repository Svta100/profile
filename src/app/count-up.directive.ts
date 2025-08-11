import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CountUp } from 'countup.js';
@Directive({
  selector: '[appCountUp]'
})
export class CountUpDirective implements OnChanges {
  @Input() endVal: number = 0;
  @Input() duration: number = 2;

  private countUp: CountUp | undefined;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['endVal'] && this.countUp) {
      this.countUp.update(this.endVal);
    } else {
      this.initCountUp();
    }
  }

  private initCountUp(): void {
    this.countUp = new CountUp(this.el.nativeElement, this.endVal, {
      startVal: 0,
      duration: this.duration,
      useEasing: true,
      useGrouping: true
    });
    this.countUp.start();
  }
}
