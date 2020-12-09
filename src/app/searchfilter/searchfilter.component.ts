import { Component, Injectable, OnInit } from '@angular/core';
import { Books } from '../books.component';
//import { BooksService } from '../bookservice.service';

@Component({
  selector: 'app-searchfilter',
  templateUrl: './searchfilter.component.html',
  styleUrls: ['./searchfilter.component.scss'],
  //providers:[BooksService]
})
@Injectable()
export class SearchfilterComponent implements OnInit {

  //constructor() { }
  name = 'Search By Title Author Genre';
  numberOfBooks: number;
  books: Books[];
  filter: Books = new Books();

  constructor(){}
   
  //  ngOnInit(){
  //    this.booksService.getBooks().subscribe(
  //    (books: Books[]) => {
  //        this.books = books;
  //        this.numberOfBooks = this.books.length;
  //      });
  //  }
   ngOnInit(): void {
   }
//   searchText = '';

//   biography:string[] = [
//     'Alan Turing: The Enigma: The Book That Inspired the Film The Imitation Game - Updated Edition by Andrew Hodges',
//     'A Beautiful Mind by Sylvia Nasar',
//     'Alexander Hamilton by Ron Chernow',
//     'Steve Jobs (Hardcover) by Walter Isaacson',
//     'The Diary of a Young Girl (Mass Market Paperback) by Anne Frank'
//   ];

//   fiction:string[] = [
//   'The Harry Potter series. by J.K. Rowling',
//   'The Lord of the Rings Trilogy. by J.R.R. Tolkien',
//   'The Count of Monte Cristo. by Alexandre Dumas',
//   'A Game of Thrones. by George R.R. Martin',
//   'To Kill a Mockingbird. by Harper Lee',
//   'The Little Prince. by Antoine de Saint-Exupery'
//   ];

//   graphic:string[]=[
//   'Nimona. by Noelle Stevenson',
//   'Watchmen. by Alan Moore and Dave Gibbons',
//   'Maus: A Survivors Tale. My Father Bleeds History',
//   'Daytripper. by Gabriel Ba and Fabio Moon',
//   'This One Summer. by Mariko Tamaki and Jillian Tamaki',
//   'Sweet Tooth. Out of the Deep Woods',
//   'Through The Woods. by Emily Carroll',
//   'Blankets. An Illustrated Novel'
//   ];

// nonfiction:string[]=[
// 'When Breath Becomes Air by Paul Kalanithi',
// 'Sapiens: A Brief History of Humankind by Yuval Noah Harari',
// 'Into Thin Air: A Personal Account of the Mt. Everest Disaster by Jon Krakauer',
// 'Surely You,re Joking, Mr. Feynman! by Richard P. Feynman',
// 'Guns, Germs, and Steel: The Fates of Human Societies by Jared Diamond',
// 'Manual for Living by Epictetus',
// 'Influence: The Psychology of Persuasion by Robert Cialdini6',
// 'Meditations by Marcus Aurelius',
// 'A Brief History of Time by Stephen Hawking',
// 'The War of Art: Break Through Your Blocks and Win Your Inner Creative Battles by Steven Pressfield',
// 'This is Water by David Foster Wallace'
// ];



}

