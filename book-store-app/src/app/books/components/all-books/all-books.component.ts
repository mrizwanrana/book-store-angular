import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { CounterService } from 'src/app/shared/services/counter.service';

@Component({
  selector: 'all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit {

  private _pageTitle: string

  public set pageTitle(value: string){
    this._pageTitle = value;
  }

  public get pageTitle(){
    return this._pageTitle
  }

  public books: BookModel[] = [];

  constructor(public bookService: BookService, public _counterServices: CounterService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }
    //const allBooks = this.bookService.getBooks(); 
    //this.pageTitle = 'All books'
    /*allBooks.forEach(b => {
      var obj = new BookModel();
      obj.id = b.id;
      obj.title = b.title;
      obj.author = b.author;
      obj.totalPages = b.totalPages;
      obj.price = b.price;
      obj.isPublished = b.isPublished;
      obj.publishedOn = b.publishedOn;

      //this.books.push(obj);*/
    //})
    //console.log(this.books);
  //}

   //public increase(): void{
    //this._counterServices.incCounter();
  //}

  //public decrease(): void{
    //this._counterServices.decCounter();
  //}

  private getAllBooks(): void{
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
    });
  }
}
