import { Pipe, PipeTransform } from '@angular/core';

import { Books } from './books.component';

@Pipe({
    name: 'bookfilter',
    pure: false
})
export class BookFilterPipe implements PipeTransform {
  transform(items: Books[], filter: Books): Books[] {
    if (!items || !filter) {
      return items;
    }
    return items.filter((item: Books) => this.applyFilter(item, filter));
  }
  
  applyFilter(book: Books , filter : Books ): boolean{
    for (let field  in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (book[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (book[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}