import { ProcessCreditCardPipe } from './process-credit-card.pipe';

describe('ProcessCreditCardPipe', () => {
  it('create an instance', () => {
    const pipe = new ProcessCreditCardPipe();
    expect(pipe).toBeTruthy();
  });
});
