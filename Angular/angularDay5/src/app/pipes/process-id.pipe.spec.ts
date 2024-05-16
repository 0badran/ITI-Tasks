import { ProcessIDPipe } from './process-id.pipe';

describe('ProcessIDPipe', () => {
  it('create an instance', () => {
    const pipe = new ProcessIDPipe();
    expect(pipe).toBeTruthy();
  });
});
