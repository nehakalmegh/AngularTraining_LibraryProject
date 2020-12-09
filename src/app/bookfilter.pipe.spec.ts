import { BookFilterPipe } from './bookfilter.pipe';
import { Books } from './books.component';

describe('BookfilterPipe', () => {
  it('create an instance', () => {
    const pipe = new BookFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
