import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../models/book.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  @ViewChild('myForm') myForm: NgForm;
  public model: BookModel;
  constructor(private _bookService: BookService) { }

  prices: any[] = [
    {value: 1000, viewValue: '$ 1000'},
    {value: 2000, viewValue: '$ 2000'},
    {value: 3000, viewValue: '$ 3000'},
  ];

  ngOnInit(): void {
    this.model = new BookModel();
    //this.model.title = 'Book';
    this.model.totalPages = 100;
    this.model.price = {
      value: 1000,
      currency: 'USD'
    }
    this.model.isPublished = true;
  }

  public saveBook(): void {
    /*public saveBook(value: any): void {
    console.log(value);
    const book: BookModel = new BookModel();
    book.title = value.title;
    book.author = value.author;
    book.totalPages = value.pages;
    book.price = {
      currency: '$',
      value: value.price
    };
    book.isPublished = value.isPublished;
    book.publishedOn = value.publishedOn;
    this._bookService.addBook(book);*/
    if(this.myForm.valid)
    {
      this._bookService.addBook(this.model);
    }
    else
    {
      alert('From invalid');
    }
    console.log(this.model);
    
  }
}
