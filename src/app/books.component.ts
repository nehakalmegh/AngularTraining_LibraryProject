import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  template: `
    <p>
      books works!
    </p>
  `,
  styles: [
  ]
})
export class Books implements OnInit {
  title: string;
  author: string;
  metadata: string;
  users: Array<user>;

  constructor() { }

  ngOnInit(): void {
  }

}
export interface user {
  id: number;
  name: string;
}
