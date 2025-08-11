import { CountUpDirective } from './count-up.directive';
import { CountUp } from 'countup.js';

describe('CountUpDirective', () => {
  it('should create an instance', () => {
    const directive = new CountUpDirective();
    expect(directive).toBeTruthy();
  });
});
